/**
 * VALIDADOR DE TOKENS - COLMENA GOLDEN CROSS
 * Archivo: validador_tokens.js
 * 
 * Incluir en landing_colmena.html ANTES de cerrar body:
 * <script src="validador_tokens.js"></script>
 * 
 * NO MODIFICA index.html
 * Peso: ~5KB
 */

(function() {
  'use strict';

  // ════════════════════════════════════════════════════════════════════════════
  // CONFIGURACIÓN
  // ════════════════════════════════════════════════════════════════════════════
  
  const CONFIG = {
    URL_LANDING: 'https://tuplancontacto-lgtm.github.io/colmena-landing/',
    CLAVE_SECRETA: 'COLMENA_GOLDEN_2025_TOKEN_SECURITY',
    ASESORES: {
      jose_pepe: { nombre: 'José Pepe', telefono: '+56 9 9070 1837' },
      betty: { nombre: 'Betty González', telefono: '+56 9 8389 9232' },
      jose_mora: { nombre: 'José Mora', telefono: '+56 9 7535 6696' }
    }
  };

  // ════════════════════════════════════════════════════════════════════════════
  // FUNCIONES AUXILIARES
  // ════════════════════════════════════════════════════════════════════════════

  function decodificarToken(tokenBase64) {
    try {
      const tokenJSON = atob(tokenBase64);
      return JSON.parse(tokenJSON);
    } catch (e) {
      console.error('Error al decodificar token:', e);
      return null;
    }
  }

  function obtenerTokenDelURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('token');
  }

  function obtenerTokenDelStorage() {
    return localStorage.getItem('token_acceso_valido');
  }

  function guardarTokenEnStorage(token) {
    localStorage.setItem('token_acceso_valido', token);
    localStorage.setItem('token_timestamp', Date.now().toString());
    localStorage.setItem('token_asesor', token.asesorKey || '');
    localStorage.setItem('token_rut', token.clienteRUT || '');
  }

  function limpiarURL() {
    // Eliminar ?token=... de la URL después de validar
    if (window.history && window.history.replaceState) {
      const urlSinToken = window.location.pathname;
      window.history.replaceState({}, document.title, urlSinToken);
    }
  }

  // ════════════════════════════════════════════════════════════════════════════
  // CREAR PANEL DE VALIDACIÓN
  // ════════════════════════════════════════════════════════════════════════════

  function crearPanelValidacion() {
    const panelHTML = `
      <div id="panelValidacionTokens" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(10, 26, 42, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        font-family: 'Segoe UI', Arial, sans-serif;
      ">
        <div style="
          background: linear-gradient(135deg, #112233 0%, #1a3a5a 100%);
          border: 2px solid #d4af37;
          border-radius: 20px;
          padding: 50px;
          max-width: 500px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.8);
        ">
          <div style="font-size: 3rem; margin-bottom: 20px;">🔐</div>
          <h1 style="color: #d4af37; margin: 0 0 10px 0; font-size: 1.8rem;">Acceso Restringido</h1>
          <p style="color: #b8c5d6; margin-bottom: 30px;">Cotización exclusiva para clientes referidos</p>

          <div id="containerValidacion">
            <input 
              type="text" 
              id="inputTokens" 
              placeholder="Ingresa tu código de acceso"
              style="
                width: 100%;
                padding: 15px;
                border: 2px solid #2a3a4a;
                border-radius: 8px;
                background: #0a1a2a;
                color: white;
                font-size: 1rem;
                text-align: center;
                letter-spacing: 2px;
                margin-bottom: 20px;
              "
            />
            <button 
              id="btnValidarTokens"
              onclick="window.__ValidadorTokens__.validarToken()"
              style="
                width: 100%;
                padding: 15px;
                background: linear-gradient(135deg, #d4af37, #f0c860);
                color: #0a1a2a;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s;
              "
            >
              🔓 Validar Acceso
            </button>
            <div id="mensajeErrorTokens" style="
              background: #4a1a1a;
              border: 2px solid #ff8080;
              color: #ff8080;
              padding: 15px;
              border-radius: 8px;
              margin-top: 20px;
              display: none;
              font-size: 0.9rem;
            "></div>
            <div id="infoAccesoTokens" style="
              background: #1a3a5a;
              border-left: 4px solid #60a5fa;
              padding: 15px;
              border-radius: 8px;
              margin-top: 20px;
              display: none;
              font-size: 0.85rem;
              color: #b8c5d6;
              text-align: left;
            "></div>
          </div>

          <div id="containerSinTokens" style="margin-top: 30px; text-align: left;">
            <p style="color: #888; font-size: 0.9rem; margin: 20px 0;">
              <strong>¿No tienes código de acceso?</strong><br>
              Debes ser referido por uno de nuestros asesores autorizados.
            </p>
            <div style="background: #0d1f2d; padding: 15px; border-radius: 8px; border-left: 3px solid #d4af37;">
              <p style="color: #d4af37; margin: 0 0 10px 0; font-weight: bold;">👨‍💼 Asesores disponibles:</p>
              <p style="color: #888; margin: 5px 0; font-size: 0.85rem;">
                José Pepe: <span style="color: #4ade80;">+56 9 9070 1837</span>
              </p>
              <p style="color: #888; margin: 5px 0; font-size: 0.85rem;">
                Betty González: <span style="color: #4ade80;">+56 9 8389 9232</span>
              </p>
              <p style="color: #888; margin: 5px 0; font-size: 0.85rem;">
                José Mora: <span style="color: #4ade80;">+56 9 7535 6696</span>
              </p>
            </div>
            <p style="color: #888; font-size: 0.85rem; margin-top: 15px;">
              📞 Contacta a un asesor para obtener tu código de acceso exclusivo.
            </p>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', panelHTML);
  }

  // ════════════════════════════════════════════════════════════════════════════
  // VALIDADOR DE TOKENS
  // ════════════════════════════════════════════════════════════════════════════

  const ValidadorTokens = {
    tokenValido: false,
    tokenObj: null,

    validarToken: function() {
      const inputToken = document.getElementById('inputTokens').value.trim();
      const mensajeError = document.getElementById('mensajeErrorTokens');
      const infoAcceso = document.getElementById('infoAccesoTokens');

      if (!inputToken) {
        mensajeError.textContent = '⚠️ Por favor ingresa un código de acceso válido';
        mensajeError.style.display = 'block';
        return;
      }

      const tokenObj = decodificarToken(inputToken);

      if (!tokenObj) {
        mensajeError.textContent = '❌ Código de acceso inválido o corrupto';
        mensajeError.style.display = 'block';
        infoAcceso.style.display = 'none';
        return;
      }

      // VALIDACIONES
      if (!tokenObj.activo) {
        mensajeError.textContent = '❌ Este código ha sido desactivado. Contacta con tu asesor.';
        mensajeError.style.display = 'block';
        return;
      }

      const fechaExpiracion = new Date(tokenObj.fechaExpiracion);
      const ahora = new Date();
      if (ahora > fechaExpiracion) {
        mensajeError.textContent = `❌ Este código expiró el ${fechaExpiracion.toLocaleDateString('es-CL')}`;
        mensajeError.style.display = 'block';
        infoAcceso.style.display = 'none';
        return;
      }

      if (tokenObj.usosRestantes <= 0) {
        mensajeError.textContent = '❌ Has agotado el límite de accesos. Contacta a tu asesor para renovar.';
        mensajeError.style.display = 'block';
        infoAcceso.style.display = 'none';
        return;
      }

      // ✅ TOKEN VÁLIDO
      mensajeError.style.display = 'none';
      infoAcceso.innerHTML = `
        <strong>✅ Acceso Autorizado</strong><br>
        Cliente: ${tokenObj.clienteRUT}<br>
        Usos restantes: ${tokenObj.usosRestantes - 1} de ${tokenObj.usosMaximos}<br>
        Expira: ${fechaExpiracion.toLocaleDateString('es-CL')}<br><br>
        <em>Redirigiendo al formulario...</em>
      `;
      infoAcceso.style.display = 'block';

      // Decrementar usos
      tokenObj.usosRestantes--;
      const tokenActualizado = btoa(JSON.stringify(tokenObj));
      guardarTokenEnStorage(tokenObj);

      // Guardar datos globales
      window.__TOKEN_VALIDO__ = true;
      window.__CLIENTE_RUT__ = tokenObj.clienteRUT;
      window.__ASESOR_KEY__ = tokenObj.asesorKey;
      window.__USOS_RESTANTES__ = tokenObj.usosRestantes;
      this.tokenValido = true;
      this.tokenObj = tokenObj;

      setTimeout(() => {
        this.mostrarLanding();
      }, 2000);
    },

    mostrarLanding: function() {
      const panel = document.getElementById('panelValidacionTokens');
      if (panel) {
        panel.style.display = 'none';
      }
      document.body.style.overflow = 'auto';
      
      // Pre-llenar RUT si existe input
      if (document.getElementById('rut')) {
        document.getElementById('rut').value = window.__CLIENTE_RUT__;
        document.getElementById('rut').disabled = true;
        document.getElementById('rut').style.opacity = '0.6';
        document.getElementById('rut').style.cursor = 'not-allowed';
      }

      // Inyectar datos del asesor en formulario
      if (document.getElementById('asesor')) {
        document.getElementById('asesor').value = window.__ASESOR_KEY__;
      }

      limpiarURL();
    },

    inicializar: function() {
      const tokenURL = obtenerTokenDelURL();
      const tokenStorage = obtenerTokenDelStorage();

      // Si ya hay token válido en storage
      if (tokenStorage) {
        const tokenObj = decodificarToken(tokenStorage);
        if (tokenObj && tokenObj.activo && new Date() < new Date(tokenObj.fechaExpiracion) && tokenObj.usosRestantes > 0) {
          window.__TOKEN_VALIDO__ = true;
          window.__CLIENTE_RUT__ = tokenObj.clienteRUT;
          window.__ASESOR_KEY__ = tokenObj.asesorKey;
          window.__USOS_RESTANTES__ = tokenObj.usosRestantes;
          this.tokenValido = true;
          this.tokenObj = tokenObj;

          const panel = document.getElementById('panelValidacionTokens');
          if (panel) {
            panel.style.display = 'none';
          }
          document.body.style.overflow = 'auto';

          if (document.getElementById('rut')) {
            document.getElementById('rut').value = tokenObj.clienteRUT;
            document.getElementById('rut').disabled = true;
          }
          if (document.getElementById('asesor')) {
            document.getElementById('asesor').value = tokenObj.asesorKey;
          }
          limpiarURL();
          return;
        }
      }

      // Si hay token en URL, pre-llenar
      if (tokenURL) {
        document.getElementById('inputTokens').value = tokenURL;
        setTimeout(() => this.validarToken(), 500);
      }

      // Enter para validar
      const inputTokens = document.getElementById('inputTokens');
      if (inputTokens) {
        inputTokens.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') this.validarToken();
        });
      }

      document.body.style.overflow = 'hidden';
    }
  };

  // ════════════════════════════════════════════════════════════════════════════
  // INICIALIZACIÓN
  // ════════════════════════════════════════════════════════════════════════════

  window.__ValidadorTokens__ = ValidadorTokens;

  // Crear panel al cargar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      crearPanelValidacion();
      ValidadorTokens.inicializar();
    });
  } else {
    crearPanelValidacion();
    ValidadorTokens.inicializar();
  }

  // Proteger submit si no hay token
  document.addEventListener('submit', (e) => {
    if (!window.__TOKEN_VALIDO__) {
      e.preventDefault();
      alert('❌ Acceso no autorizado. Por favor valida tu código de acceso primero.');
    } else {
      // Agregar datos del token al formulario
      if (e.target && !e.target.querySelector('input[name="asesor"]')) {
        const inputAsesor = document.createElement('input');
        inputAsesor.type = 'hidden';
        inputAsesor.name = 'asesor';
        inputAsesor.value = window.__ASESOR_KEY__ || '';
        e.target.appendChild(inputAsesor);

        const inputRutOriginal = document.createElement('input');
        inputRutOriginal.type = 'hidden';
        inputRutOriginal.name = 'rut_validado';
        inputRutOriginal.value = window.__CLIENTE_RUT__ || '';
        e.target.appendChild(inputRutOriginal);
      }
    }
  });

})();
