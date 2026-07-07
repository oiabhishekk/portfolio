"use client";import{o as e,t}from"./react.Ca03aNmg.js";import{t as n}from"./jsx-runtime.DuCIhyLr.js";var r=e(t(),1),i=n();function a({SIM_RESOLUTION:e=128,DYE_RESOLUTION:t=1440,CAPTURE_RESOLUTION:n=512,DENSITY_DISSIPATION:a=3.5,VELOCITY_DISSIPATION:o=2,PRESSURE:s=.1,PRESSURE_ITERATIONS:c=20,CURL:l=3,SPLAT_RADIUS:u=.2,SPLAT_FORCE:ee=6e3,SHADING:te=!0,COLOR_UPDATE_SPEED:d=10,BACK_COLOR:f={r:.5,g:0,b:0},TRANSPARENT:ne=!0,RAINBOW_MODE:p=!0,COLOR:m=`#ff0000`}){let h=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let r=h.current;if(!r)return;function i(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let g={SIM_RESOLUTION:e,DYE_RESOLUTION:t,CAPTURE_RESOLUTION:n,DENSITY_DISSIPATION:a,VELOCITY_DISSIPATION:o,PRESSURE:s,PRESSURE_ITERATIONS:c,CURL:l,SPLAT_RADIUS:u,SPLAT_FORCE:ee,SHADING:te,COLOR_UPDATE_SPEED:d,PAUSED:!1,BACK_COLOR:f,TRANSPARENT:ne,RAINBOW_MODE:p,COLOR:m},_=[new i],{gl:v,ext:y}=re(r);y.supportLinearFiltering||(g.DYE_RESOLUTION=256,g.SHADING=!1);function re(e){let t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},n=e.getContext(`webgl2`,t),r=!!n;r||(n=e.getContext(`webgl`,t)||e.getContext(`experimental-webgl`,t));let i,a;r?(n.getExtension(`EXT_color_buffer_float`),a=n.getExtension(`OES_texture_float_linear`)):(i=n.getExtension(`OES_texture_half_float`),a=n.getExtension(`OES_texture_half_float_linear`)),n.clearColor(0,0,0,1);let o=r?n.HALF_FLOAT:i&&i.HALF_FLOAT_OES,s,c,l;return r?(s=b(n,n.RGBA16F,n.RGBA,o),c=b(n,n.RG16F,n.RG,o),l=b(n,n.R16F,n.RED,o)):(s=b(n,n.RGBA,n.RGBA,o),c=b(n,n.RGBA,n.RGBA,o),l=b(n,n.RGBA,n.RGBA,o)),{gl:n,ext:{formatRGBA:s,formatRG:c,formatR:l,halfFloatTexType:o,supportLinearFiltering:a}}}function b(e,t,n,r){if(!ie(e,t,n,r))switch(t){case e.R16F:return b(e,e.RG16F,e.RG,r);case e.RG16F:return b(e,e.RGBA16F,e.RGBA,r);default:return null}return{internalFormat:t,format:n}}function ie(e,t,n,r){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,n,r,null);let a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}class ae{constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let t=0;for(let n=0;n<e.length;n++)t+=Fe(e[n]);let n=this.programs[t];if(n==null){let r=w(v.FRAGMENT_SHADER,this.fragmentShaderSource,e);n=S(this.vertexShader,r),this.programs[t]=n}n!==this.activeProgram&&(this.uniforms=C(n),this.activeProgram=n)}bind(){v.useProgram(this.activeProgram)}}class x{constructor(e,t){this.uniforms={},this.program=S(e,t),this.uniforms=C(this.program)}bind(){v.useProgram(this.program)}}function S(e,t){let n=v.createProgram();return v.attachShader(n,e),v.attachShader(n,t),v.linkProgram(n),v.getProgramParameter(n,v.LINK_STATUS)||console.trace(v.getProgramInfoLog(n)),n}function C(e){let t=[],n=v.getProgramParameter(e,v.ACTIVE_UNIFORMS);for(let r=0;r<n;r++){let n=v.getActiveUniform(e,r).name;t[n]=v.getUniformLocation(e,n)}return t}function w(e,t,n){t=oe(t,n);let r=v.createShader(e);return v.shaderSource(r,t),v.compileShader(r),v.getShaderParameter(r,v.COMPILE_STATUS)||console.trace(v.getShaderInfoLog(r)),r}function oe(e,t){if(!t)return e;let n=``;return t.forEach(e=>{n+=`#define `+e+`
`}),n+e}let T=w(v.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),se=w(v.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),ce=w(v.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
     `),le=w(v.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),ue=w(v.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,y.supportLinearFiltering?null:[`MANUAL_FILTERING`]),de=w(v.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),fe=w(v.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),pe=w(v.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),me=w(v.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),he=w(v.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),E=(v.bindBuffer(v.ARRAY_BUFFER,v.createBuffer()),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),v.STATIC_DRAW),v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,v.createBuffer()),v.bufferData(v.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),v.STATIC_DRAW),v.vertexAttribPointer(0,2,v.FLOAT,!1,0,0),v.enableVertexAttribArray(0),(e,t=!1)=>{e==null?(v.viewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),v.bindFramebuffer(v.FRAMEBUFFER,null)):(v.viewport(0,0,e.width,e.height),v.bindFramebuffer(v.FRAMEBUFFER,e.fbo)),t&&(v.clearColor(0,0,0,1),v.clear(v.COLOR_BUFFER_BIT)),v.drawElements(v.TRIANGLES,6,v.UNSIGNED_SHORT,0)}),D,O,k,A,j,M=new x(T,se),N=new x(T,ce),P=new x(T,le),F=new x(T,ue),I=new x(T,de),L=new x(T,fe),R=new x(T,pe),z=new x(T,me),B=new x(T,he),V=new ae(T,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `);function H(){let e=Pe(g.SIM_RESOLUTION),t=Pe(g.DYE_RESOLUTION),n=y.halfFloatTexType,r=y.formatRGBA,i=y.formatRG,a=y.formatR,o=y.supportLinearFiltering?v.LINEAR:v.NEAREST;v.disable(v.BLEND),D=D?G(D,t.width,t.height,r.internalFormat,r.format,n,o):W(t.width,t.height,r.internalFormat,r.format,n,o),O=O?G(O,e.width,e.height,i.internalFormat,i.format,n,o):W(e.width,e.height,i.internalFormat,i.format,n,o),k=U(e.width,e.height,a.internalFormat,a.format,n,v.NEAREST),A=U(e.width,e.height,a.internalFormat,a.format,n,v.NEAREST),j=W(e.width,e.height,a.internalFormat,a.format,n,v.NEAREST)}function U(e,t,n,r,i,a){v.activeTexture(v.TEXTURE0);let o=v.createTexture();v.bindTexture(v.TEXTURE_2D,o),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,a),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,a),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE),v.texImage2D(v.TEXTURE_2D,0,n,e,t,0,r,i,null);let s=v.createFramebuffer();return v.bindFramebuffer(v.FRAMEBUFFER,s),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,o,0),v.viewport(0,0,e,t),v.clear(v.COLOR_BUFFER_BIT),{texture:o,fbo:s,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach(e){return v.activeTexture(v.TEXTURE0+e),v.bindTexture(v.TEXTURE_2D,o),e}}}function W(e,t,n,r,i,a){let o=U(e,t,n,r,i,a),s=U(e,t,n,r,i,a);return{width:e,height:t,texelSizeX:o.texelSizeX,texelSizeY:o.texelSizeY,get read(){return o},set read(e){o=e},get write(){return s},set write(e){s=e},swap(){let e=o;o=s,s=e}}}function ge(e,t,n,r,i,a,o){let s=U(t,n,r,i,a,o);return M.bind(),v.uniform1i(M.uniforms.uTexture,e.attach(0)),E(s),s}function G(e,t,n,r,i,a,o){return e.width===t&&e.height===n?e:(e.read=ge(e.read,t,n,r,i,a,o),e.write=U(t,n,r,i,a,o),e.width=t,e.height=n,e.texelSizeX=1/t,e.texelSizeY=1/n,e)}function _e(){let e=[];g.SHADING&&e.push(`SHADING`),V.setKeywords(e)}_e(),H();let K=Date.now(),q=0;function J(){let e=ve();ye()&&H(),be(e),xe(),Se(e),Ce(null),requestAnimationFrame(J)}function ve(){let e=Date.now(),t=(e-K)/1e3;return t=Math.min(t,.016666),K=e,t}function ye(){let e=$(r.clientWidth),t=$(r.clientHeight);return r.width!==e||r.height!==t?(r.width=e,r.height=t,!0):!1}function be(e){q+=e*g.COLOR_UPDATE_SPEED,q>=1&&(q=Ne(q,0,1),_.forEach(e=>{e.color=Q()}))}function xe(){_.forEach(e=>{e.moved&&(e.moved=!1,Te(e))})}function Se(e){v.disable(v.BLEND),L.bind(),v.uniform2f(L.uniforms.texelSize,O.texelSizeX,O.texelSizeY),v.uniform1i(L.uniforms.uVelocity,O.read.attach(0)),E(A),R.bind(),v.uniform2f(R.uniforms.texelSize,O.texelSizeX,O.texelSizeY),v.uniform1i(R.uniforms.uVelocity,O.read.attach(0)),v.uniform1i(R.uniforms.uCurl,A.attach(1)),v.uniform1f(R.uniforms.curl,g.CURL),v.uniform1f(R.uniforms.dt,e),E(O.write),O.swap(),I.bind(),v.uniform2f(I.uniforms.texelSize,O.texelSizeX,O.texelSizeY),v.uniform1i(I.uniforms.uVelocity,O.read.attach(0)),E(k),N.bind(),v.uniform1i(N.uniforms.uTexture,j.read.attach(0)),v.uniform1f(N.uniforms.value,g.PRESSURE),E(j.write),j.swap(),z.bind(),v.uniform2f(z.uniforms.texelSize,O.texelSizeX,O.texelSizeY),v.uniform1i(z.uniforms.uDivergence,k.attach(0));for(let e=0;e<g.PRESSURE_ITERATIONS;e++)v.uniform1i(z.uniforms.uPressure,j.read.attach(1)),E(j.write),j.swap();B.bind(),v.uniform2f(B.uniforms.texelSize,O.texelSizeX,O.texelSizeY),v.uniform1i(B.uniforms.uPressure,j.read.attach(0)),v.uniform1i(B.uniforms.uVelocity,O.read.attach(1)),E(O.write),O.swap(),F.bind(),v.uniform2f(F.uniforms.texelSize,O.texelSizeX,O.texelSizeY),y.supportLinearFiltering||v.uniform2f(F.uniforms.dyeTexelSize,O.texelSizeX,O.texelSizeY);let t=O.read.attach(0);v.uniform1i(F.uniforms.uVelocity,t),v.uniform1i(F.uniforms.uSource,t),v.uniform1f(F.uniforms.dt,e),v.uniform1f(F.uniforms.dissipation,g.VELOCITY_DISSIPATION),E(O.write),O.swap(),y.supportLinearFiltering||v.uniform2f(F.uniforms.dyeTexelSize,D.texelSizeX,D.texelSizeY),v.uniform1i(F.uniforms.uVelocity,O.read.attach(0)),v.uniform1i(F.uniforms.uSource,D.read.attach(1)),v.uniform1f(F.uniforms.dissipation,g.DENSITY_DISSIPATION),E(D.write),D.swap()}function Ce(e){v.blendFunc(v.ONE,v.ONE_MINUS_SRC_ALPHA),v.enable(v.BLEND),we(e)}function we(e){let t=e==null?v.drawingBufferWidth:e.width,n=e==null?v.drawingBufferHeight:e.height;V.bind(),g.SHADING&&v.uniform2f(V.uniforms.texelSize,1/t,1/n),v.uniform1i(V.uniforms.uTexture,D.read.attach(0)),E(e)}function Te(e){let t=e.deltaX*g.SPLAT_FORCE,n=e.deltaY*g.SPLAT_FORCE;Y(e.texcoordX,e.texcoordY,t,n,e.color)}function Ee(e){let t=Q();t.r*=10,t.g*=10,t.b*=10;let n=10*(Math.random()-.5),r=30*(Math.random()-.5);Y(e.texcoordX,e.texcoordY,n,r,t)}function Y(e,t,n,i,a){P.bind(),v.uniform1i(P.uniforms.uTarget,O.read.attach(0)),v.uniform1f(P.uniforms.aspectRatio,r.width/r.height),v.uniform2f(P.uniforms.point,e,t),v.uniform3f(P.uniforms.color,n,i,0),v.uniform1f(P.uniforms.radius,De(g.SPLAT_RADIUS/100)),E(O.write),O.swap(),v.uniform1i(P.uniforms.uTarget,D.read.attach(0)),v.uniform3f(P.uniforms.color,a.r,a.g,a.b),E(D.write),D.swap()}function De(e){let t=r.width/r.height;return t>1&&(e*=t),e}function X(e,t,n,i){e.id=t,e.down=!0,e.moved=!1,e.texcoordX=n/r.width,e.texcoordY=1-i/r.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=Q()}function Z(e,t,n,i){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=t/r.width,e.texcoordY=1-n/r.height,e.deltaX=ke(e.texcoordX-e.prevTexcoordX),e.deltaY=Ae(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function Oe(e){e.down=!1}function ke(e){let t=r.width/r.height;return t<1&&(e*=t),e}function Ae(e){let t=r.width/r.height;return t>1&&(e/=t),e}function je(e){let t=e.replace(`#`,``);t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);let n=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,i=parseInt(t.slice(4,6),16)/255;return{r:n*.15,g:r*.15,b:i*.15}}function Q(){if(!g.RAINBOW_MODE)return je(g.COLOR);let e=Me(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Me(e,t,n){let r,i,a,o,s,c,l,u;switch(o=Math.floor(e*6),s=e*6-o,c=n*(1-t),l=n*(1-s*t),u=n*(1-(1-s)*t),o%6){case 0:r=n,i=u,a=c;break;case 1:r=l,i=n,a=c;break;case 2:r=c,i=n,a=u;break;case 3:r=c,i=l,a=n;break;case 4:r=u,i=c,a=n;break;case 5:r=n,i=c,a=l;break;default:break}return{r,g:i,b:a}}function Ne(e,t,n){let r=n-t;return r===0?t:(e-t)%r+t}function Pe(e){let t=v.drawingBufferWidth/v.drawingBufferHeight;t<1&&(t=1/t);let n=Math.round(e),r=Math.round(e*t);return v.drawingBufferWidth>v.drawingBufferHeight?{width:r,height:n}:{width:n,height:r}}function $(e){let t=window.devicePixelRatio||1;return Math.floor(e*t)}function Fe(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}window.addEventListener(`mousedown`,e=>{let t=_[0];X(t,-1,$(e.clientX),$(e.clientY)),Ee(t)}),document.body.addEventListener(`mousemove`,function e(t){let n=_[0],r=$(t.clientX),i=$(t.clientY),a=Q();J(),Z(n,r,i,a),document.body.removeEventListener(`mousemove`,e)}),window.addEventListener(`mousemove`,e=>{let t=_[0],n=$(e.clientX),r=$(e.clientY),i=t.color;Z(t,n,r,i)}),document.body.addEventListener(`touchstart`,function e(t){let n=t.targetTouches,r=_[0];for(let e=0;e<n.length;e++){let t=$(n[e].clientX),i=$(n[e].clientY);J(),X(r,n[e].identifier,t,i)}document.body.removeEventListener(`touchstart`,e)}),window.addEventListener(`touchstart`,e=>{let t=e.targetTouches,n=_[0];for(let e=0;e<t.length;e++){let r=$(t[e].clientX),i=$(t[e].clientY);X(n,t[e].identifier,r,i)}}),window.addEventListener(`touchmove`,e=>{let t=e.targetTouches,n=_[0];for(let e=0;e<t.length;e++)Z(n,$(t[e].clientX),$(t[e].clientY),n.color)},!1),window.addEventListener(`touchend`,e=>{let t=e.changedTouches,n=_[0];for(let e=0;e<t.length;e++)Oe(n)}),J()},[e,t,n,a,o,s,c,l,u,ee,te,d,f,ne,p,m]),(0,i.jsx)(`div`,{className:`fixed top-0 left-0 -z-10 pointer-events-none w-full h-full`,children:(0,i.jsx)(`canvas`,{ref:h,id:`fluid`,className:`w-screen h-screen block`})})}export{a as default};