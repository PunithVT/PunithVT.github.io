"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{2912:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(2115),i=r(6595),o=r(5339);let a=parseInt(o.sPf.replace(/\D+/g,""));class l extends o.BKk{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${a>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}let s=e=>new o.Pq0().setFromSpherical(new o.YHV(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),c=n.forwardRef(({radius:e=100,depth:t=50,count:r=5e3,saturation:a=0,factor:c=4,fade:d=!1,speed:u=1},f)=>{let p=n.useRef(null),[m,h,v]=n.useMemo(()=>{let n=[],i=[],l=Array.from({length:r},()=>(.5+.5*Math.random())*c),d=new o.Q1f,u=e+t,f=t/r;for(let e=0;e<r;e++)u-=f*Math.random(),n.push(...s(u).toArray()),d.setHSL(e/r,a,.9),i.push(d.r,d.g,d.b);return[new Float32Array(n),new Float32Array(i),new Float32Array(l)]},[r,t,c,e,a]);(0,i.F)(e=>p.current&&(p.current.uniforms.time.value=e.clock.elapsedTime*u));let[y]=n.useState(()=>new l);return n.createElement("points",{ref:f},n.createElement("bufferGeometry",null,n.createElement("bufferAttribute",{attach:"attributes-position",args:[m,3]}),n.createElement("bufferAttribute",{attach:"attributes-color",args:[h,3]}),n.createElement("bufferAttribute",{attach:"attributes-size",args:[v,1]})),n.createElement("primitive",{ref:p,object:y,attach:"material",blending:o.EZo,"uniforms-fade-value":d,depthWrite:!1,transparent:!0,vertexColors:!0}))})},3646:(e,t,r)=>{let n,i;r.d(t,{E:()=>x});var o=r(8945),a=r(2115),l=r(2669),s=r(5339),c=r(6595);let d=new s.Pq0,u=new s.Pq0,f=new s.Pq0,p=new s.I9Y;function m(e,t,r){let n=d.setFromMatrixPosition(e.matrixWorld);n.project(t);let i=r.width/2,o=r.height/2;return[n.x*i+i,-(n.y*o)+o]}let h=e=>1e-10>Math.abs(e)?0:e;function v(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=h(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let y=(n=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>v(e,n)),g=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>v(e,i(t),"translate(-50%,-50%)")),x=a.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:i,center:v,fullscreen:x,portal:b,distanceFactor:w,sprite:E=!1,transform:S=!1,occlude:P,onOcclude:M,castShadow:C,receiveShadow:A,material:_,geometry:R,zIndexRange:O=[0x1000037,0],calculatePosition:z=m,as:j="div",wrapperClass:L,pointerEvents:B="auto",...F},D)=>{let{gl:U,camera:T,scene:I,size:W,raycaster:N,events:q,viewport:H}=(0,c.D)(),[k]=a.useState(()=>document.createElement(j)),V=a.useRef(null),G=a.useRef(null),$=a.useRef(0),Q=a.useRef([0,0]),Y=a.useRef(null),X=a.useRef(null),Z=(null==b?void 0:b.current)||q.connected||U.domElement.parentNode,J=a.useRef(null),K=a.useRef(!1),ee=a.useMemo(()=>P&&"blending"!==P||Array.isArray(P)&&P.length&&function(e){return e&&"object"==typeof e&&"current"in e}(P[0]),[P]);a.useLayoutEffect(()=>{let e=U.domElement;P&&"blending"===P?(e.style.zIndex=`${Math.floor(O[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[P]),a.useLayoutEffect(()=>{if(G.current){let e=V.current=l.createRoot(k);if(I.updateMatrixWorld(),S)k.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=z(G.current,T,W);k.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Z&&(i?Z.prepend(k):Z.appendChild(k)),()=>{Z&&Z.removeChild(k),e.unmount()}}},[Z,S]),a.useLayoutEffect(()=>{L&&(k.className=L)},[L]);let et=a.useMemo(()=>S?{position:"absolute",top:0,left:0,width:W.width,height:W.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:v?"translate3d(-50%,-50%,0)":"none",...x&&{top:-W.height/2,left:-W.width/2,width:W.width,height:W.height},...r},[r,v,x,W,S]),er=a.useMemo(()=>({position:"absolute",pointerEvents:B}),[B]);a.useLayoutEffect(()=>{var t,i;K.current=!1,S?null==(t=V.current)||t.render(a.createElement("div",{ref:Y,style:et},a.createElement("div",{ref:X,style:er},a.createElement("div",{ref:D,className:n,style:r,children:e})))):null==(i=V.current)||i.render(a.createElement("div",{ref:D,style:et,className:n,children:e}))});let en=a.useRef(!0);(0,c.F)(e=>{if(G.current){T.updateMatrixWorld(),G.current.updateWorldMatrix(!0,!1);let e=S?Q.current:z(G.current,T,W);if(S||Math.abs($.current-T.zoom)>t||Math.abs(Q.current[0]-e[0])>t||Math.abs(Q.current[1]-e[1])>t){let t=function(e,t){let r=d.setFromMatrixPosition(e.matrixWorld),n=u.setFromMatrixPosition(t.matrixWorld),i=r.sub(n),o=t.getWorldDirection(f);return i.angleTo(o)>Math.PI/2}(G.current,T),r=!1;ee&&(Array.isArray(P)?r=P.map(e=>e.current):"blending"!==P&&(r=[I]));let n=en.current;r?en.current=function(e,t,r,n){let i=d.setFromMatrixPosition(e.matrixWorld),o=i.clone();o.project(t),p.set(o.x,o.y),r.setFromCamera(p,t);let a=r.intersectObjects(n,!0);if(a.length){let e=a[0].distance;return i.distanceTo(r.ray.origin)<e}return!0}(G.current,T,N,r)&&!t:en.current=!t,n!==en.current&&(M?M(!en.current):k.style.display=en.current?"block":"none");let i=Math.floor(O[0]/2),o=P?ee?[O[0],i]:[i-1,0]:O;if(k.style.zIndex=`${function(e,t,r){if(t instanceof s.ubm||t instanceof s.qUd){let n=d.setFromMatrixPosition(e.matrixWorld),i=u.setFromMatrixPosition(t.matrixWorld),o=n.distanceTo(i),a=(r[1]-r[0])/(t.far-t.near),l=r[1]-a*t.far;return Math.round(a*o+l)}}(G.current,T,o)}`,S){let[e,t]=[W.width/2,W.height/2],r=T.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:i,left:o,bottom:a,right:l}=T,s=y(T.matrixWorldInverse),c=n?`scale(${r})translate(${h(-(l+o)/2)}px,${h((i+a)/2)}px)`:`translateZ(${r}px)`,d=G.current.matrixWorld;E&&((d=T.matrixWorldInverse.clone().transpose().copyPosition(d).scale(G.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),k.style.width=W.width+"px",k.style.height=W.height+"px",k.style.perspective=n?"":`${r}px`,Y.current&&X.current&&(Y.current.style.transform=`${c}${s}translate(${e}px,${t}px)`,X.current.style.transform=g(d,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof s.qUd)return t.zoom;if(!(t instanceof s.ubm))return 1;{let r=d.setFromMatrixPosition(e.matrixWorld),n=u.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*r.distanceTo(n))}}(G.current,T)*w;k.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Q.current=e,$.current=T.zoom}}if(!ee&&J.current&&!K.current)if(S){if(Y.current){let e=Y.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=T;if(t||R)F.scale&&(Array.isArray(F.scale)?F.scale instanceof s.Pq0?J.current.scale.copy(F.scale.clone().divideScalar(1)):J.current.scale.set(1/F.scale[0],1/F.scale[1],1/F.scale[2]):J.current.scale.setScalar(1/F.scale));else{let t=(w||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;J.current.scale.set(r,n,1)}K.current=!0}}}else{let t=k.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/H.factor,r=t.clientWidth*e,n=t.clientHeight*e;J.current.scale.set(r,n,1),K.current=!0}J.current.lookAt(e.camera.position)}});let ei=a.useMemo(()=>({vertexShader:S?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[S]);return a.createElement("group",(0,o.A)({},F,{ref:G}),P&&!ee&&a.createElement("mesh",{castShadow:C,receiveShadow:A,ref:J},R||a.createElement("planeGeometry",null),_||a.createElement("shaderMaterial",{side:s.$EB,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))})},7377:(e,t,r)=>{r.d(t,{AQ:()=>N,IS:()=>F,Ux:()=>ee,Xc:()=>Y,jN:()=>B,nJ:()=>en,vg:()=>X});var n=r(924),i=r(6595),o=r(2115),a=r(5339),l=r(3689),s=r(6491);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){!function(e,t,r){var n;(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let u=new a.PTz;new a.O9p;let f=new a.Pq0;new a.B69;let p=new a.kn4,m=new a.Pq0,h=new a.PTz,v=new a.Pq0,y=({x:e,y:t,z:r,w:n})=>u.set(e,t,r,n),g={fixed:1,dynamic:0,kinematicPosition:2,kinematicVelocity:3},x=e=>g[e],b=e=>e?e instanceof a.PTz?[e.x,e.y,e.z,e.w]:e instanceof a.Pq0||e instanceof a.O9p?[e.x,e.y,e.z]:Array.isArray(e)?e:[e]:[0];function w(e){let t=(0,o.useRef)(void 0);return void 0===t.current&&(t.current={value:"function"==typeof e?e():e}),t.current.value}let E=({onStep:e,updatePriority:t})=>((0,i.F)((t,r)=>{e(r)},t),null),S=({onStep:e})=>((e=>{let t=(0,o.useRef)(e),r=(0,o.useRef)(0),n=(0,o.useRef)(0);(0,o.useEffect)(()=>{t.current=e},[e]),(0,o.useEffect)(()=>{let e=()=>{let i=performance.now(),o=i-n.current;r.current=requestAnimationFrame(e),t.current(o/1e3),n.current=i};return r.current=requestAnimationFrame(e),()=>cancelAnimationFrame(r.current)},[])})(t=>{e(t)}),null);var P=(0,o.memo)(({onStep:e,type:t,updatePriority:r})=>"independent"===t?o.createElement(S,{onStep:e}):o.createElement(E,{onStep:e,updatePriority:r}));function M(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}let C=["mass","linearDamping","angularDamping","type","onCollisionEnter","onCollisionExit","onIntersectionEnter","onIntersectionExit","onContactForce","children","canSleep","ccd","gravityScale","softCcdPrediction","ref"],A=["shape","args"],_="Please pick ONLY ONE of the `density`, `mass` and `massProperties` options.",R={sensor:(e,t)=>{e.setSensor(t)},collisionGroups:(e,t)=>{e.setCollisionGroups(t)},solverGroups:(e,t)=>{e.setSolverGroups(t)},friction:(e,t)=>{e.setFriction(t)},frictionCombineRule:(e,t)=>{e.setFrictionCombineRule(t)},restitution:(e,t)=>{e.setRestitution(t)},restitutionCombineRule:(e,t)=>{e.setRestitutionCombineRule(t)},activeCollisionTypes:(e,t)=>{e.setActiveCollisionTypes(t)},contactSkin:(e,t)=>{e.setContactSkin(t)},quaternion:()=>{},position:()=>{},rotation:()=>{},scale:()=>{}},O=Object.keys(R),z={cuboid:"cuboid",ball:"ball",hull:"convexHull",trimesh:"trimesh"},j=e=>({collision:!!(null!=e&&e.onCollisionEnter||null!=e&&e.onCollisionExit||null!=e&&e.onIntersectionEnter||null!=e&&e.onIntersectionExit),contactForce:!!(null!=e&&e.onContactForce)}),L=(e={})=>M(e,C),B=()=>{let e=(0,o.useContext)(T);if(!e)throw Error("react-three-rapier: useRapier must be used within <Physics />!");return e},F=e=>{let{beforeStepCallbacks:t}=B(),r=(e=>{let t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e},[e]),t})(e);(0,o.useEffect)(()=>(t.add(r),()=>{t.delete(r)}),[])},D=(e,t,r=!0)=>{let[n,i]=(0,o.useState)([]);return(0,o.useEffect)(()=>{e.current&&!1!==t.colliders&&i((({object:e,ignoreMeshColliders:t=!0,options:r})=>{let n=[];e.updateWorldMatrix(!0,!1);let i=e.matrixWorld.clone().invert(),o=e=>{if("isMesh"in e){if(t&&(e=>{let t=!1;return e.traverseAncestors(e=>{"MeshCollider"===e.userData.r3RapierType&&(t=!0)}),t})(e))return;let o=e.getWorldScale(v),l=z[r.colliders||"cuboid"];e.updateWorldMatrix(!0,!1),p.copy(e.matrixWorld).premultiply(i).decompose(m,h,v);let c=new a.O9p().setFromQuaternion(h,"XYZ"),{geometry:u}=e,{args:f,offset:y}=((e,t)=>{switch(t){case"cuboid":{e.computeBoundingBox();let{boundingBox:t}=e,r=t.getSize(new a.Pq0);return{args:[r.x/2,r.y/2,r.z/2],offset:t.getCenter(new a.Pq0)}}case"ball":{e.computeBoundingSphere();let{boundingSphere:t}=e;return{args:[t.radius],offset:t.center}}case"trimesh":{var r;let t=e.index?e.clone():(0,s.ec)(e);return{args:[t.attributes.position.array,null==(r=t.index)?void 0:r.array],offset:new a.Pq0}}case"hull":return{args:[e.clone().attributes.position.array],offset:new a.Pq0}}return{args:[],offset:new a.Pq0}})(u,r.colliders||"cuboid"),g=d(d({},L(r)),{},{args:f,shape:l,rotation:[c.x,c.y,c.z],position:[m.x+y.x*o.x,m.y+y.y*o.y,m.z+y.z*o.z],scale:[o.x,o.y,o.z]});n.push(g)}};return r.includeInvisible?e.traverse(o):e.traverseVisible(o),n})({object:e.current,options:t,ignoreMeshColliders:r}))},[t.colliders]),n},U=(0,o.memo)(()=>{let{world:e}=B(),t=(0,o.useRef)(null);return(0,i.F)(()=>{let r=t.current;if(!r)return;let n=e.debugRender(),i=new a.LoY;i.setAttribute("position",new a.THS(n.vertices,3)),i.setAttribute("color",new a.THS(n.colors,4)),r.geometry.dispose(),r.geometry=i}),o.createElement("group",null,o.createElement("lineSegments",{ref:t,frustumCulled:!1},o.createElement("lineBasicMaterial",{color:0xffffff,vertexColors:!0}),o.createElement("bufferGeometry",null)))}),T=(0,o.createContext)(void 0),I=(e,t)=>{var r,n,i,o,a,l;return{target:{rigidBody:e.rigidBody.object,collider:e.collider.object,colliderObject:null==(r=e.collider.state)?void 0:r.object,rigidBodyObject:null==(n=e.rigidBody.state)?void 0:n.object},other:{rigidBody:t.rigidBody.object,collider:t.collider.object,colliderObject:null==(i=t.collider.state)?void 0:i.object,rigidBodyObject:null==(o=t.rigidBody.state)?void 0:o.object},rigidBody:t.rigidBody.object,collider:t.collider.object,colliderObject:null==(a=t.collider.state)?void 0:a.object,rigidBodyObject:null==(l=t.rigidBody.state)?void 0:l.object}},W=async()=>{let e=await Promise.resolve().then(r.bind(r,924));return await e.init(),e},N=e=>{let{colliders:t="cuboid",children:r,timeStep:s=1/60,paused:c=!1,interpolate:u=!0,updatePriority:f,updateLoop:g="follow",debug:x=!1,gravity:b=[0,-9.81,0],allowedLinearError:E=.001,predictionDistance:S=.002,numSolverIterations:M=4,numInternalPgsIterations:C=1,minIslandSize:A=128,maxCcdSubsteps:_=1,contactNaturalFrequency:R=30,lengthUnit:O=1}=e,z=(0,l.DY)(W,["@react-thee/rapier",W]),{invalidate:j}=(0,i.D)(),L=w(()=>new Map),B=w(()=>new Map),F=w(()=>new Map),D=w(()=>new Map),N=w(()=>new n.EventQueue(!1)),q=w(()=>new Set),H=w(()=>new Set),k=w(()=>({filterContactPair:(...e)=>{for(let t of q){let r=t.current(...e);if(null!==r)return r}return null},filterIntersectionPair:(...e)=>{for(let t of H)if(!1===t.current(...e))return!1;return!0}})),V=w(()=>new Set),G=w(()=>new Set),{proxy:$,reset:Q,set:Y}=w(()=>(e=>{let t;return{proxy:new Proxy({},{get:(r,n)=>(t||(t=e()),Reflect.get(t,n)),set:(r,n,i)=>(t||(t=e()),Reflect.set(t,n,i))}),reset:()=>{t=void 0},set:e=>{t=e}}})(()=>new z.World((e=>{let[t,r,n]=e;return new a.Pq0(t,r,n)})(b))));(0,o.useEffect)(()=>()=>{$.free(),Q()},[]),(0,o.useEffect)(()=>{$.gravity=(e=>Array.isArray(e)?new n.Vector3(e[0],e[1],e[2]):"number"==typeof e?new n.Vector3(e,e,e):new n.Vector3(e.x,e.y,e.z))(b),$.integrationParameters.numSolverIterations=M,$.integrationParameters.numInternalPgsIterations=C,$.integrationParameters.normalizedAllowedLinearError=E,$.integrationParameters.minIslandSize=A,$.integrationParameters.maxCcdSubsteps=_,$.integrationParameters.normalizedPredictionDistance=S,$.lengthUnit=O,$.integrationParameters.contact_natural_frequency=R},[$,...b,M,C,E,A,_,S,O,R]);let X=(0,o.useCallback)(e=>{var t;let r=$.getCollider(e),n=D.get(e),i=B.get(e),o=null==r||null==(t=r.parent())?void 0:t.handle,a=void 0!==o?$.getRigidBody(o):void 0,l=a&&void 0!==o?F.get(o):void 0;return{collider:{object:r,events:n,state:i},rigidBody:{object:a,events:l,state:void 0!==o?L.get(o):void 0}}},[]),[Z]=(0,o.useState)({previousState:{},accumulator:0}),J=(0,o.useCallback)(e=>{let t="vary"===s,r=a.cj9.clamp(e,0,.5),n=e=>{V.forEach(e=>{e.current($)}),$.timestep=e;let t=q.size>0||H.size>0;$.step(N,t?k:void 0),G.forEach(e=>{e.current($)})};if(t)n(r);else for(Z.accumulator+=r;Z.accumulator>=s;)u&&(Z.previousState={},$.forEachRigidBody(e=>{Z.previousState[e.handle]={position:e.translation(),rotation:e.rotation()}})),n(s),Z.accumulator-=s;let i=t||!u||c?1:Z.accumulator/s;L.forEach((e,t)=>{let r=$.getRigidBody(t),n=F.get(t);if(null!=n&&n.onSleep||null!=n&&n.onWake){var o,a;r.isSleeping()&&!e.isSleeping&&(null==n||null==(o=n.onSleep)||o.call(n)),!r.isSleeping()&&e.isSleeping&&(null==n||null==(a=n.onWake)||a.call(n)),e.isSleeping=r.isSleeping()}if(!r||r.isSleeping()&&!("isInstancedMesh"in e.object)||!e.setMatrix)return;let l=r.translation(),s=r.rotation(),c=Z.previousState[t];c&&(p.compose(c.position,y(c.rotation),e.scale).premultiply(e.invertedWorldMatrix).decompose(m,h,v),"mesh"==e.meshType&&(e.object.position.copy(m),e.object.quaternion.copy(h))),p.compose(l,y(s),e.scale).premultiply(e.invertedWorldMatrix).decompose(m,h,v),"instancedMesh"==e.meshType?e.setMatrix(p):(e.object.position.lerp(m,i),e.object.quaternion.slerp(h,i))}),N.drainCollisionEvents((e,t,r)=>{var n,i,o,a,l,s,c,u,f,p,m,h,v,y,g,x,b,w,E,S,P,M,C,A;let _=X(e),R=X(t);if(!(null!=_&&_.collider.object)||!(null!=R&&R.collider.object))return;let O=I(_,R),z=I(R,_);r?$.contactPair(_.collider.object,R.collider.object,(e,t)=>{var r,n,i,o,a,l,s,c;null==(r=_.rigidBody.events)||null==(n=r.onCollisionEnter)||n.call(r,d(d({},O),{},{manifold:e,flipped:t})),null==(i=R.rigidBody.events)||null==(o=i.onCollisionEnter)||o.call(i,d(d({},z),{},{manifold:e,flipped:t})),null==(a=_.collider.events)||null==(l=a.onCollisionEnter)||l.call(a,d(d({},O),{},{manifold:e,flipped:t})),null==(s=R.collider.events)||null==(c=s.onCollisionEnter)||c.call(s,d(d({},z),{},{manifold:e,flipped:t}))}):(null==(n=_.rigidBody.events)||null==(i=n.onCollisionExit)||i.call(n,O),null==(o=R.rigidBody.events)||null==(a=o.onCollisionExit)||a.call(o,z),null==(l=_.collider.events)||null==(s=l.onCollisionExit)||s.call(l,O),null==(c=R.collider.events)||null==(u=c.onCollisionExit)||u.call(c,z)),r?$.intersectionPair(_.collider.object,R.collider.object)&&(null==(f=_.rigidBody.events)||null==(p=f.onIntersectionEnter)||p.call(f,O),null==(m=R.rigidBody.events)||null==(h=m.onIntersectionEnter)||h.call(m,z),null==(v=_.collider.events)||null==(y=v.onIntersectionEnter)||y.call(v,O),null==(g=R.collider.events)||null==(x=g.onIntersectionEnter)||x.call(g,z)):(null==(b=_.rigidBody.events)||null==(w=b.onIntersectionExit)||w.call(b,O),null==(E=R.rigidBody.events)||null==(S=E.onIntersectionExit)||S.call(E,z),null==(P=_.collider.events)||null==(M=P.onIntersectionExit)||M.call(P,O),null==(C=R.collider.events)||null==(A=C.onIntersectionExit)||A.call(C,z))}),N.drainContactForceEvents(e=>{var t,r,n,i,o,a,l,s;let c=X(e.collider1()),u=X(e.collider2());if(!(null!=c&&c.collider.object)||!(null!=u&&u.collider.object))return;let f=I(c,u),p=I(u,c);null==(t=c.rigidBody.events)||null==(r=t.onContactForce)||r.call(t,d(d({},f),{},{totalForce:e.totalForce(),totalForceMagnitude:e.totalForceMagnitude(),maxForceDirection:e.maxForceDirection(),maxForceMagnitude:e.maxForceMagnitude()})),null==(n=u.rigidBody.events)||null==(i=n.onContactForce)||i.call(n,d(d({},p),{},{totalForce:e.totalForce(),totalForceMagnitude:e.totalForceMagnitude(),maxForceDirection:e.maxForceDirection(),maxForceMagnitude:e.maxForceMagnitude()})),null==(o=c.collider.events)||null==(a=o.onContactForce)||a.call(o,d(d({},f),{},{totalForce:e.totalForce(),totalForceMagnitude:e.totalForceMagnitude(),maxForceDirection:e.maxForceDirection(),maxForceMagnitude:e.maxForceMagnitude()})),null==(l=u.collider.events)||null==(s=l.onContactForce)||s.call(l,d(d({},p),{},{totalForce:e.totalForce(),totalForceMagnitude:e.totalForceMagnitude(),maxForceDirection:e.maxForceDirection(),maxForceMagnitude:e.maxForceMagnitude()}))}),$.forEachActiveRigidBody(()=>{j()})},[c,s,u,$]),K=(0,o.useMemo)(()=>({rapier:z,world:$,setWorld:e=>{Y(e)},physicsOptions:{colliders:t,gravity:b},rigidBodyStates:L,colliderStates:B,rigidBodyEvents:F,colliderEvents:D,beforeStepCallbacks:V,afterStepCallbacks:G,isPaused:c,isDebug:x,step:J,filterContactPairHooks:q,filterIntersectionPairHooks:H}),[c,J,x,t,b]),ee=(0,o.useCallback)(e=>{c||J(e)},[c,J]);return o.createElement(T.Provider,{value:K},o.createElement(P,{onStep:ee,type:g,updatePriority:f}),x&&o.createElement(U,null),r)};function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let H=(e,t=null)=>{let r=(0,o.useRef)(t);return e&&"function"!=typeof e?(e.current||(e.current=r.current),e):r},k=(e,t,r)=>{let n=(0,o.useRef)(void 0),i=(0,o.useCallback)(()=>(n.current||(n.current=e()),n.current),r);return(0,o.useEffect)(()=>{let e=i();return()=>{t(e),n.current=void 0}},[i]),i},V=["args","colliders","canSleep"],G={gravityScale:(e,t)=>{e.setGravityScale(t,!0)},additionalSolverIterations(e,t){e.setAdditionalSolverIterations(t)},linearDamping:(e,t)=>{e.setLinearDamping(t)},angularDamping:(e,t)=>{e.setAngularDamping(t)},dominanceGroup:(e,t)=>{e.setDominanceGroup(t)},enabledRotations:(e,[t,r,n])=>{e.setEnabledRotations(t,r,n,!0)},enabledTranslations:(e,[t,r,n])=>{e.setEnabledTranslations(t,r,n,!0)},lockRotations:(e,t)=>{e.lockRotations(t,!0)},lockTranslations:(e,t)=>{e.lockTranslations(t,!0)},angularVelocity:(e,[t,r,n])=>{e.setAngvel({x:t,y:r,z:n},!0)},linearVelocity:(e,[t,r,n])=>{e.setLinvel({x:t,y:r,z:n},!0)},ccd:(e,t)=>{e.enableCcd(t)},softCcdPrediction:(e,t)=>{e.setSoftCcdPrediction(t)},userData:(e,t)=>{e.userData=t},type(e,t){e.setBodyType(x(t),!0)},position:()=>{},rotation:()=>{},quaternion:()=>{},scale:()=>{}},$=Object.keys(G),Q=(0,o.memo)(e=>{let{children:t,position:r,rotation:i,quaternion:l,scale:s,name:c}=e,{world:u,colliderEvents:y,colliderStates:g}=B(),x=K(),w=H(e.ref),E=(0,o.useRef)(null),S=k(()=>{let t=((e,t,r,i)=>{let o=((e,t,r)=>{let n=t.slice();if("heightfield"===e){let e=n[3];return e.x*=r.x,e.x*=r.y,e.x*=r.z,n}if("trimesh"===e||"convexHull"===e)return n[0]=((e,t)=>{let r=Array.from(e);for(let n=0;n<e.length/3;n++)r[3*n]*=t.x,r[3*n+1]*=t.y,r[3*n+2]*=t.z;return r})(n[0],r),n;let i=[r.x,r.y,r.z,r.x,r.x];return n.map((e,t)=>i[t]*e)})(e.shape,e.args,r),a=n.ColliderDesc[e.shape](...o);return t.createCollider(a,null==i?void 0:i())})(e,u,E.current.getWorldScale((({x:e,y:t,z:r}={x:0,y:0,z:0})=>new a.Pq0(e,t,r))()),null==x?void 0:x.getRigidBody);return"function"==typeof e.ref&&e.ref(t),w.current=t,t},e=>{u.getCollider(e.handle)&&u.removeCollider(e,!0)},[...A.flatMap(t=>Array.isArray(e[t])?e[t]:[e[t]]),x]);(0,o.useEffect)(()=>{let e,t=S();return g.set(t.handle,(e=E.current,{collider:t,worldParent:(null==x?void 0:x.ref.current)||void 0,object:e})),()=>{g.delete(t.handle)}},[S]);let P=(0,o.useMemo)(()=>d(d({},L(null==x?void 0:x.options)),e),[e,null==x?void 0:x.options]);return((e,t,r)=>{let n=(0,o.useMemo)(()=>O.flatMap(e=>b(t[e])),[t]);(0,o.useEffect)(()=>{((e,t,r)=>{let n=r.get(e.handle);if(n){var i;let r=n.object.parent.getWorldScale(f),o=null==(i=n.worldParent)?void 0:i.matrixWorld.clone().invert();n.object.updateWorldMatrix(!0,!1),p.copy(n.object.matrixWorld),o&&p.premultiply(o),p.decompose(m,h,v),e.parent()?(e.setTranslationWrtParent({x:m.x*r.x,y:m.y*r.y,z:m.z*r.z}),e.setRotationWrtParent(h)):(e.setTranslation({x:m.x*r.x,y:m.y*r.y,z:m.z*r.z}),e.setRotation(h)),O.forEach(r=>{if(r in t){let n=t[r];R[r](e,n,t)}}),((e,t)=>{if(void 0!==t.density){if(void 0!==t.mass||void 0!==t.massProperties)throw Error(_);e.setDensity(t.density);return}if(void 0!==t.mass){if(void 0!==t.massProperties)throw Error(_);e.setMass(t.mass);return}void 0!==t.massProperties&&e.setMassProperties(t.massProperties.mass,t.massProperties.centerOfMass,t.massProperties.principalAngularInertia,t.massProperties.angularInertiaLocalFrame)})(e,t)}})(e(),t,r)},[...n,e])})(S,P,g),((e,t,r,i={})=>{let{onCollisionEnter:a,onCollisionExit:l,onIntersectionEnter:s,onIntersectionExit:c,onContactForce:d}=t;(0,o.useEffect)(()=>{let o=e();if(o){let{collision:e,contactForce:u}=j(t),f=e||i.collision,p=u||i.contactForce;f&&p?o.setActiveEvents(n.ActiveEvents.COLLISION_EVENTS|n.ActiveEvents.CONTACT_FORCE_EVENTS):f?o.setActiveEvents(n.ActiveEvents.COLLISION_EVENTS):p&&o.setActiveEvents(n.ActiveEvents.CONTACT_FORCE_EVENTS),r.set(o.handle,{onCollisionEnter:a,onCollisionExit:l,onIntersectionEnter:s,onIntersectionExit:c,onContactForce:d})}return()=>{o&&r.delete(o.handle)}},[a,l,s,c,d,i])})(S,P,y,j(null==x?void 0:x.options)),o.createElement("object3D",{position:r,rotation:i,quaternion:l,scale:s,ref:E,name:c},t)}),Y=o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"cuboid",ref:t})));Y.displayName="CuboidCollider",o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"roundCuboid",ref:t}))).displayName="RoundCuboidCollider",o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"ball",ref:t}))).displayName="BallCollider",o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"capsule",ref:t}))).displayName="CapsuleCollider",o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"heightfield",ref:t}))).displayName="HeightfieldCollider",o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"trimesh",ref:t}))).displayName="TrimeshCollider",o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"cone",ref:t}))).displayName="ConeCollider",o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"roundCone",ref:t}))).displayName="RoundConeCollider";let X=o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"cylinder",ref:t})));X.displayName="CylinderCollider",X.displayName="RoundCylinderCollider",o.forwardRef((e,t)=>o.createElement(Q,q({},e,{shape:"convexHull",ref:t}))).displayName="ConvexHullCollider";let Z=["ref","children","type","position","rotation","scale","quaternion","transformState"],J=(0,o.createContext)(void 0),K=()=>(0,o.useContext)(J),ee=(0,o.memo)(e=>{let{ref:t,children:r,type:i,position:a,rotation:l,scale:s,quaternion:c,transformState:u}=e,f=M(e,Z),y=(0,o.useRef)(null),g=H(t),{world:w,rigidBodyStates:E,physicsOptions:S,rigidBodyEvents:P}=B(),C=(0,o.useMemo)(()=>d(d(d({},S),e),{},{children:void 0}),[S,e]),A=V.flatMap(e=>Array.isArray(C[e])?[...C[e]]:C[e]),_=D(y,C),R=k(()=>{let e=(e=>{var t;let r=x((null==e?void 0:e.type)||"dynamic"),i=new n.RigidBodyDesc(r);return i.canSleep=null==(t=null==e?void 0:e.canSleep)||t,i})(C),r=w.createRigidBody(e);return"function"==typeof t&&t(r),g.current=r,r},e=>{w.getRigidBody(e.handle)&&w.removeRigidBody(e)},A);(0,o.useEffect)(()=>{let t=R(),r=(({rigidBody:e,object:t,setMatrix:r,getMatrix:n,worldScale:i,meshType:o="mesh"})=>{t.updateWorldMatrix(!0,!1);let a=t.parent.matrixWorld.clone().invert();return{object:t,rigidBody:e,invertedWorldMatrix:a,setMatrix:r||(e=>{t.matrix.copy(e)}),getMatrix:n||(e=>e.copy(t.matrix)),scale:i||t.getWorldScale(v).clone(),isSleeping:!1,meshType:o}})({rigidBody:t,object:y.current});return E.set(t.handle,e.transformState?e.transformState(r):r),()=>{E.delete(t.handle)}},[R]),((e,t,r,n=!0)=>{let i=(0,o.useMemo)(()=>$.flatMap(e=>b(t[e])),[t]);(0,o.useEffect)(()=>{((e,t,r,n=!0)=>{if(!e)return;let i=r.get(e.handle);i&&(n&&(i.object.updateWorldMatrix(!0,!1),p.copy(i.object.matrixWorld).decompose(m,h,v),e.setTranslation(m,!1),e.setRotation(h,!1)),$.forEach(r=>{r in t&&G[r](e,t[r])}))})(e(),t,r,n)},i)})(R,C,E),((e,t,r)=>{let{onWake:n,onSleep:i,onCollisionEnter:a,onCollisionExit:l,onIntersectionEnter:s,onIntersectionExit:c,onContactForce:d}=t,u={onWake:n,onSleep:i,onCollisionEnter:a,onCollisionExit:l,onIntersectionEnter:s,onIntersectionExit:c,onContactForce:d};(0,o.useEffect)(()=>{let t=e();return r.set(t.handle,u),()=>{r.delete(t.handle)}},[n,i,a,l,s,c,d])})(R,C,P);let O=(0,o.useMemo)(()=>({ref:y,getRigidBody:R,options:C}),[R]);return o.createElement(J.Provider,{value:O},o.createElement("object3D",q({ref:y},f,{position:a,rotation:l,quaternion:c,scale:s}),r,_.map((e,t)=>o.createElement(Q,q({key:t},e)))))});ee.displayName="RigidBody",(0,o.memo)(e=>{let{children:t,type:r}=e,{physicsOptions:n}=B(),i=(0,o.useRef)(null),{options:a}=K(),l=D(i,(0,o.useMemo)(()=>d(d(d({},n),a),{},{children:void 0,colliders:r}),[n,a]),!1);return o.createElement("object3D",{ref:i,userData:{r3RapierType:"MeshCollider"}},t,l.map((e,t)=>o.createElement(Q,q({key:t},e))))}).displayName="MeshCollider";let et=["ref"],er=["children","instances","colliderNodes","position","rotation","quaternion","scale"],en=(0,o.memo)(e=>{let{ref:t}=e,r=M(e,et),n=H(t,[]),i=(0,o.useRef)(null),l=(0,o.useRef)(null),{children:s,instances:c,colliderNodes:u=[],position:f,rotation:p,quaternion:m,scale:h}=r,v=M(r,er),y=D(i,d(d({},r),{},{children:void 0})),g=()=>{let e=l.current.children[0];if(e&&"isInstancedMesh"in e)return e};return(0,o.useEffect)(()=>{let e=g();e?e.instanceMatrix.setUsage(a.Vnu):console.warn("InstancedRigidBodies expects exactly one child, which must be an InstancedMesh")},[]),o.createElement("object3D",q({ref:i},v,{position:f,rotation:p,quaternion:m,scale:h}),o.createElement("object3D",{ref:l},s),null==c?void 0:c.map((e,t)=>o.createElement(ee,q({},v,e,{ref:e=>{n.current[t]=e},transformState:e=>((e,t)=>{let r=g();return r?d(d({},e),{},{getMatrix:e=>(r.getMatrixAt(t,e),e),setMatrix:e=>{r.setMatrixAt(t,e),r.instanceMatrix.needsUpdate=!0},meshType:"instancedMesh"}):e})(e,t)}),o.createElement(o.Fragment,null,u.map((e,t)=>o.createElement(o.Fragment,{key:t},e)),y.map((e,t)=>o.createElement(Q,q({key:t},e)))))))});en.displayName="InstancedRigidBodies"},8258:(e,t,r)=>{let n,i;r.d(t,{m:()=>F});var o=r(8945),a=r(2115),l=r(5339),s=r(6595);let c=new l.NRn,d=new l.Pq0;class u extends l.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new l.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new l.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new l.LuO(t,6,1);return this.setAttribute("instanceStart",new l.eHs(r,3,0)),this.setAttribute("instanceEnd",new l.eHs(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new l.LuO(r,2*t,1);return this.setAttribute("instanceColorStart",new l.eHs(n,t,0)),this.setAttribute("instanceColorEnd",new l.eHs(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new l.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new l.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),c.setFromBufferAttribute(t),this.boundingBox.union(c))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new l.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,o=e.count;i<o;i++)d.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(d)),d.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(d));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var f=r(7548),p=r(4814);class m extends l.BKk{constructor(e){super({type:"LineMaterial",uniforms:l.LlO.clone(l.LlO.merge([f.UniformsLib.common,f.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new l.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${p.r>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=p.r>=125?"uv1":"uv2",v=new l.IUQ,y=new l.Pq0,g=new l.Pq0,x=new l.IUQ,b=new l.IUQ,w=new l.IUQ,E=new l.Pq0,S=new l.kn4,P=new l.cZY,M=new l.Pq0,C=new l.NRn,A=new l.iyt,_=new l.IUQ;function R(e,t,r){return _.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),_.multiplyScalar(1/_.w),_.x=i/r.width,_.y=i/r.height,_.applyMatrix4(e.projectionMatrixInverse),_.multiplyScalar(1/_.w),Math.abs(Math.max(_.x,_.y))}class O extends l.eaF{constructor(e=new u,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)y.fromBufferAttribute(t,e),g.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+y.distanceTo(g);let i=new l.LuO(n,2,1);return e.setAttribute("instanceDistanceStart",new l.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new l.eHs(i,1,1)),this}raycast(e,t){let r,o,a=this.material.worldUnits,s=e.camera;null!==s||a||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let c=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let d=this.matrixWorld,u=this.geometry,f=this.material;if(i=f.linewidth+c,null===u.boundingSphere&&u.computeBoundingSphere(),A.copy(u.boundingSphere).applyMatrix4(d),a)r=.5*i;else{let e=Math.max(s.near,A.distanceToPoint(n.origin));r=R(s,e,f.resolution)}if(A.radius+=r,!1!==n.intersectsSphere(A)){if(null===u.boundingBox&&u.computeBoundingBox(),C.copy(u.boundingBox).applyMatrix4(d),a)o=.5*i;else{let e=Math.max(s.near,C.distanceToPoint(n.origin));o=R(s,e,f.resolution)}C.expandByScalar(o),!1!==n.intersectsBox(C)&&(a?function(e,t){let r=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,s=o.attributes.instanceEnd,c=Math.min(o.instanceCount,a.count);for(let o=0;o<c;o++){P.start.fromBufferAttribute(a,o),P.end.fromBufferAttribute(s,o),P.applyMatrix4(r);let c=new l.Pq0,d=new l.Pq0;n.distanceSqToSegment(P.start,P.end,d,c),d.distanceTo(c)<.5*i&&t.push({point:d,pointOnLine:c,distance:n.origin.distanceTo(d),object:e,face:null,faceIndex:o,uv:null,[h]:null})}}(this,t):function(e,t,r){let o=t.projectionMatrix,a=e.material.resolution,s=e.matrixWorld,c=e.geometry,d=c.attributes.instanceStart,u=c.attributes.instanceEnd,f=Math.min(c.instanceCount,d.count),p=-t.near;n.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(o),w.multiplyScalar(1/w.w),w.x*=a.x/2,w.y*=a.y/2,w.z=0,E.copy(w),S.multiplyMatrices(t.matrixWorldInverse,s);for(let t=0;t<f;t++){if(x.fromBufferAttribute(d,t),b.fromBufferAttribute(u,t),x.w=1,b.w=1,x.applyMatrix4(S),b.applyMatrix4(S),x.z>p&&b.z>p)continue;if(x.z>p){let e=x.z-b.z,t=(x.z-p)/e;x.lerp(b,t)}else if(b.z>p){let e=b.z-x.z,t=(b.z-p)/e;b.lerp(x,t)}x.applyMatrix4(o),b.applyMatrix4(o),x.multiplyScalar(1/x.w),b.multiplyScalar(1/b.w),x.x*=a.x/2,x.y*=a.y/2,b.x*=a.x/2,b.y*=a.y/2,P.start.copy(x),P.start.z=0,P.end.copy(b),P.end.z=0;let c=P.closestPointToPointParameter(E,!0);P.at(c,M);let f=l.cj9.lerp(x.z,b.z,c),m=f>=-1&&f<=1,v=E.distanceTo(M)<.5*i;if(m&&v){P.start.fromBufferAttribute(d,t),P.end.fromBufferAttribute(u,t),P.start.applyMatrix4(s),P.end.applyMatrix4(s);let i=new l.Pq0,o=new l.Pq0;n.distanceSqToSegment(P.start,P.end,o,i),r.push({point:o,pointOnLine:i,distance:n.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,s,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class z extends u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class j extends O{constructor(e=new z,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let L=a.forwardRef(function({points:e,color:t=0xffffff,vertexColors:r,linewidth:n,lineWidth:i,segments:c,dashed:d,...f},p){var h,v;let y=(0,s.D)(e=>e.size),g=a.useMemo(()=>c?new O:new j,[c]),[x]=a.useState(()=>new m),b=(null==r||null==(h=r[0])?void 0:h.length)===4?4:3,w=a.useMemo(()=>{let n=c?new u:new z,i=e.map(e=>{let t=Array.isArray(e);return e instanceof l.Pq0||e instanceof l.IUQ?[e.x,e.y,e.z]:e instanceof l.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=0xffffff;let e=r.map(e=>e instanceof l.Q1f?e.toArray():e);n.setColors(e.flat(),b)}return n},[e,c,r,b]);return a.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),a.useLayoutEffect(()=>{d?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[d,x]),a.useEffect(()=>()=>{w.dispose(),x.dispose()},[w]),a.createElement("primitive",(0,o.A)({object:g,ref:p},f),a.createElement("primitive",{object:w,attach:"geometry"}),a.createElement("primitive",(0,o.A)({object:x,attach:"material",color:t,vertexColors:!!r,resolution:[y.width,y.height],linewidth:null!=(v=null!=n?n:i)?v:1,dashed:d,transparent:4===b},f)))}),B=new l.Pq0,F=a.forwardRef(function({start:e=[0,0,0],end:t=[0,0,0],mid:r,segments:n=20,...i},s){let c=a.useRef(null);a.useImperativeHandle(s,()=>c.current);let[d]=a.useState(()=>new l.CV9(void 0,void 0,void 0)),u=a.useCallback((e,t,r,n=20)=>(e instanceof l.Pq0?d.v0.copy(e):d.v0.set(...e),t instanceof l.Pq0?d.v2.copy(t):d.v2.set(...t),r instanceof l.Pq0?d.v1.copy(r):Array.isArray(r)?d.v1.set(...r):d.v1.copy(d.v0.clone().add(d.v2.clone().sub(d.v0)).add(B.set(0,d.v0.y-d.v2.y,0))),d.getPoints(n)),[]);a.useLayoutEffect(()=>{c.current.setPoints=(e,t,r)=>{let n=u(e,t,r);c.current.geometry&&c.current.geometry.setPositions(n.map(e=>e.toArray()).flat())}},[]);let f=a.useMemo(()=>u(e,t,r,n),[e,t,r,n]);return a.createElement(L,(0,o.A)({ref:c,points:f},i))})}}]);