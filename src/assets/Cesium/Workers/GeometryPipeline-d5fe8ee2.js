define(["exports","./AttributeCompression-943b6739","./Matrix2-fa56e6dd","./Check-ba987d16","./when-4bbc8319","./ComponentDatatype-bfa70d4a","./Transforms-2711fead","./EncodedCartesian3-77992927","./GeometryAttribute-752789bd","./IndexDatatype-81fb2229","./IntersectionTests-62c0bb9f","./Plane-034a4517"],function(e,A,R,t,V,L,P,d,w,S,z,a){"use strict";var g=new R.Cartesian3,T=new R.Cartesian3,x=new R.Cartesian3;var s={calculateACMR:function(e){var t=(e=V.defaultValue(e,V.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=V.defaultValue(e.cacheSize,24),n=t.length;if(!V.defined(r))for(var r=0,i=0,s=t[i];i<n;)r<s&&(r=s),s=t[++i];for(var o=[],u=0;u<r+1;u++)o[u]=0;for(var p=a+1,d=0;d<n;++d)p-o[t[d]]>a&&(o[t[d]]=p,++p);return(p-a+1)/(n/3)}};s.tipsify=function(e){var t=(e=V.defaultValue(e,V.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=V.defaultValue(e.cacheSize,24);function n(e,t,r,a,n,i,s){for(var o,u=-1,p=-1,d=0;d<r.length;){var l=r[d];a[l].numLiveTriangles&&(o=0,(p<(o=n-a[l].timeStamp+2*a[l].numLiveTriangles<=t?n-a[l].timeStamp:o)||-1===p)&&(p=o,u=l)),++d}return-1===u?function(e,t,r){for(;1<=t.length;){var a=t[t.length-1];if(t.splice(t.length-1,1),0<e[a].numLiveTriangles)return a}for(;v<r;){if(0<e[v].numLiveTriangles)return++v-1;++v}return-1}(a,i,s):u}var e=t.length,i=0,s=t[P=0],o=e;if(V.defined(r))i=r+1;else{for(;P<o;)i<s&&(i=s),s=t[++P];if(-1===i)return 0;++i}for(var u=[],p=0;p<i;p++)u[p]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};for(var d=P=0;P<o;)u[t[P]].vertexTriangles.push(d),++u[t[P]].numLiveTriangles,u[t[P+1]].vertexTriangles.push(d),++u[t[P+1]].numLiveTriangles,u[t[P+2]].vertexTriangles.push(d),++u[t[P+2]].numLiveTriangles,++d,P+=3;var l,y=0,f=a+1,v=1,m=[],c=[],C=0,h=[],b=e/3,g=[];for(p=0;p<b;p++)g[p]=!1;for(;-1!==y;){for(var A,m=[],T=(A=u[y]).vertexTriangles.length,x=0;x<T;++x)if(!g[d=A.vertexTriangles[x]]){g[d]=!0;for(var P=d+d+d,w=0;w<3;++w)l=t[P],m.push(l),c.push(l),h[C]=l,++C,--(l=u[l]).numLiveTriangles,f-l.timeStamp>a&&(l.timeStamp=f,++f),++P}y=n(0,a,m,u,f,c,i)}return h};var r={};function o(e,t,r,a,n){e[t++]=r,e[t++]=a,e[t++]=a,e[t++]=n,e[t++]=n,e[t]=r}function v(e){var t,r,a={};for(t in e)e.hasOwnProperty(t)&&V.defined(e[t])&&V.defined(e[t].values)&&(r=e[t],a[t]=new w.GeometryAttribute({componentDatatype:r.componentDatatype,componentsPerAttribute:r.componentsPerAttribute,normalize:r.normalize,values:[]}));return a}r.toWireframe=function(e){var t=e.indices;if(V.defined(t)){switch(e.primitiveType){case w.PrimitiveType.TRIANGLES:e.indices=function(e){for(var t=e.length,r=S.IndexDatatype.createTypedArray(t,t/3*6),a=0,n=0;n<t;n+=3,a+=6)o(r,a,e[n],e[n+1],e[n+2]);return r}(t);break;case w.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){var t=e.length;if(3<=t){var r=S.IndexDatatype.createTypedArray(t,6*(t-2));o(r,0,e[0],e[1],e[2]);for(var a=6,n=3;n<t;++n,a+=6)o(r,a,e[n-1],e[n],e[n-2]);return r}return new Uint16Array}(t);break;case w.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(0<e.length){for(var t=e.length-1,r=S.IndexDatatype.createTypedArray(t,6*(t-1)),a=e[0],n=0,i=1;i<t;++i,n+=6)o(r,n,a,e[i],e[i+1]);return r}return new Uint16Array}(t)}e.primitiveType=w.PrimitiveType.LINES}return e},r.createLineSegmentsForVectors=function(e,t,r){t=V.defaultValue(t,"normal"),r=V.defaultValue(r,1e4);for(var a,n=e.attributes.position.values,i=e.attributes[t].values,s=n.length,o=new Float64Array(2*s),u=0,p=0;p<s;p+=3)o[u++]=n[p],o[u++]=n[p+1],o[u++]=n[p+2],o[u++]=n[p]+i[p]*r,o[u++]=n[p+1]+i[p+1]*r,o[u++]=n[p+2]+i[p+2]*r;e=e.boundingSphere;return V.defined(e)&&(a=new P.BoundingSphere(e.center,e.radius+r)),new w.Geometry({attributes:{position:new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o})},primitiveType:w.PrimitiveType.LINES,boundingSphere:a})},r.createAttributeLocations=function(e){for(var t,r=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],a=e.attributes,n={},i=0,s=r.length,o=0;o<s;++o){var u=r[o];V.defined(a[u])&&(n[u]=i++)}for(t in a)a.hasOwnProperty(t)&&!V.defined(n[t])&&(n[t]=i++);return n},r.reorderForPreVertexCache=function(e){var t=w.Geometry.computeNumberOfVertices(e),r=e.indices;if(V.defined(r)){for(var a=new Int32Array(t),n=0;n<t;n++)a[n]=-1;for(var i,s=r,o=s.length,u=S.IndexDatatype.createTypedArray(t,o),p=0,d=0,l=0;p<o;)-1!==(i=a[s[p]])?u[d]=i:(a[i=s[p]]=l,u[d]=l,++l),++p,++d;e.indices=u;var y,f=e.attributes;for(y in f)if(f.hasOwnProperty(y)&&V.defined(f[y])&&V.defined(f[y].values)){for(var v=f[y],m=v.values,c=0,C=v.componentsPerAttribute,h=L.ComponentDatatype.createTypedArray(v.componentDatatype,l*C);c<t;){var b=a[c];if(-1!==b)for(var g=0;g<C;g++)h[C*b+g]=m[C*c+g];++c}v.values=h}}return e},r.reorderForPostVertexCache=function(e,t){var r=e.indices;if(e.primitiveType===w.PrimitiveType.TRIANGLES&&V.defined(r)){for(var a=r.length,n=0,i=0;i<a;i++)r[i]>n&&(n=r[i]);e.indices=s.tipsify({indices:r,maximumIndex:n,cacheSize:t})}return e},r.fitToUnsignedShortIndices=function(e){var t=[],r=w.Geometry.computeNumberOfVertices(e);if(V.defined(e.indices)&&r>=L.CesiumMath.SIXTY_FOUR_KILOBYTES){var a,n=[],i=[],s=0,o=v(e.attributes),u=e.indices,p=u.length;e.primitiveType===w.PrimitiveType.TRIANGLES?a=3:e.primitiveType===w.PrimitiveType.LINES?a=2:e.primitiveType===w.PrimitiveType.POINTS&&(a=1);for(var d=0;d<p;d+=a){for(var l=0;l<a;++l){var y=u[d+l],f=n[y];V.defined(f)||(f=s++,n[y]=f,function(e,t,r){for(var a in t)if(t.hasOwnProperty(a)&&V.defined(t[a])&&V.defined(t[a].values))for(var n=t[a],i=0;i<n.componentsPerAttribute;++i)e[a].values.push(n.values[r*n.componentsPerAttribute+i])}(o,e.attributes,y)),i.push(f)}s+a>=L.CesiumMath.SIXTY_FOUR_KILOBYTES&&(t.push(new w.Geometry({attributes:o,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),n=[],i=[],s=0,o=v(e.attributes))}0!==i.length&&t.push(new w.Geometry({attributes:o,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};var y=new R.Cartesian3,f=new R.Cartographic;r.projectTo2D=function(e,t,r,a,n){for(var i=e.attributes[t],s=(n=V.defined(n)?n:new P.GeographicProjection).ellipsoid,o=i.values,u=new Float64Array(o.length),p=0,d=0;d<o.length;d+=3){var l=R.Cartesian3.fromArray(o,d,y),l=s.cartesianToCartographic(l,f),l=n.project(l,y);u[p++]=l.x,u[p++]=l.y,u[p++]=l.z}return e.attributes[r]=i,e.attributes[a]=new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),delete e.attributes[t],e};var l={high:0,low:0};r.encodeAttribute=function(e,t,r,a){for(var n=e.attributes[t],i=n.values,s=i.length,o=new Float32Array(s),u=new Float32Array(s),p=0;p<s;++p)d.EncodedCartesian3.encode(i[p],l),o[p]=l.high,u[p]=l.low;n=n.componentsPerAttribute;return e.attributes[r]=new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.FLOAT,componentsPerAttribute:n,values:o}),e.attributes[a]=new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.FLOAT,componentsPerAttribute:n,values:u}),delete e.attributes[t],e};var i=new R.Cartesian3;function n(e,t){if(V.defined(t))for(var r=t.values,a=r.length,n=0;n<a;n+=3)R.Cartesian3.unpack(r,n,i),R.Matrix4.multiplyByPoint(e,i,i),R.Cartesian3.pack(i,r,n)}function u(e,t){if(V.defined(t))for(var r=t.values,a=r.length,n=0;n<a;n+=3)R.Cartesian3.unpack(r,n,i),R.Matrix3.multiplyByVector(e,i,i),i=R.Cartesian3.normalize(i,i),R.Cartesian3.pack(i,r,n)}var p=new R.Matrix4,m=new R.Matrix3;r.transformToWorldCoordinates=function(e){var t=e.modelMatrix;if(R.Matrix4.equals(t,R.Matrix4.IDENTITY))return e;var r=e.geometry.attributes;n(t,r.position),n(t,r.prevPosition),n(t,r.nextPosition),(V.defined(r.normal)||V.defined(r.tangent)||V.defined(r.bitangent))&&(R.Matrix4.inverse(t,p),R.Matrix4.transpose(p,p),R.Matrix4.getMatrix3(p,m),u(m,r.normal),u(m,r.tangent),u(m,r.bitangent));r=e.geometry.boundingSphere;return V.defined(r)&&(e.geometry.boundingSphere=P.BoundingSphere.transform(r,t,r)),e.modelMatrix=R.Matrix4.clone(R.Matrix4.IDENTITY),e};var I=new R.Cartesian3;function c(e,t){var r,a,n=e.length;e[0].modelMatrix;var i,s,o,u=V.defined(e[0][t].indices),p=e[0][t].primitiveType,d=function(e,t){var r,a=e.length,n={},i=e[0][t].attributes;for(r in i)if(i.hasOwnProperty(r)&&V.defined(i[r])&&V.defined(i[r].values)){for(var s=i[r],o=s.values.length,u=!0,p=1;p<a;++p){var d=e[p][t].attributes[r];if(!V.defined(d)||s.componentDatatype!==d.componentDatatype||s.componentsPerAttribute!==d.componentsPerAttribute||s.normalize!==d.normalize){u=!1;break}o+=d.values.length}u&&(n[r]=new w.GeometryAttribute({componentDatatype:s.componentDatatype,componentsPerAttribute:s.componentsPerAttribute,normalize:s.normalize,values:L.ComponentDatatype.createTypedArray(s.componentDatatype,o)}))}return n}(e,t);for(r in d)if(d.hasOwnProperty(r))for(i=d[r].values,y=b=0;y<n;++y)for(o=(s=e[y][t].attributes[r].values).length,a=0;a<o;++a)i[b++]=s[a];if(u){for(var l=0,y=0;y<n;++y)l+=e[y][t].indices.length;var f=w.Geometry.computeNumberOfVertices(new w.Geometry({attributes:d,primitiveType:w.PrimitiveType.POINTS})),v=S.IndexDatatype.createTypedArray(f,l),m=0,c=0;for(y=0;y<n;++y){for(var C=e[y][t].indices,h=C.length,b=0;b<h;++b)v[m++]=c+C[b];c+=w.Geometry.computeNumberOfVertices(e[y][t])}f=v}var g=new R.Cartesian3,A=0;for(y=0;y<n;++y){if(T=e[y][t].boundingSphere,!V.defined(T)){g=void 0;break}R.Cartesian3.add(T.center,g,g)}if(V.defined(g))for(R.Cartesian3.divideByScalar(g,n,g),y=0;y<n;++y){var T=e[y][t].boundingSphere,x=R.Cartesian3.magnitude(R.Cartesian3.subtract(T.center,g,I))+T.radius;A<x&&(A=x)}return new w.Geometry({attributes:d,indices:f,primitiveType:p,boundingSphere:V.defined(g)?new P.BoundingSphere(g,A):void 0})}r.combineInstances=function(e){for(var t=[],r=[],a=e.length,n=0;n<a;++n){var i=e[n];V.defined(i.geometry)?t.push(i):V.defined(i.westHemisphereGeometry)&&V.defined(i.eastHemisphereGeometry)&&r.push(i)}var s=[];return 0<t.length&&s.push(c(t,"geometry")),0<r.length&&(s.push(c(r,"westHemisphereGeometry")),s.push(c(r,"eastHemisphereGeometry"))),s};var O=new R.Cartesian3,E=new R.Cartesian3,N=new R.Cartesian3,D=new R.Cartesian3;r.computeNormal=function(e){for(var t=e.indices,r=e.attributes,a=r.position.values,n=r.position.values.length/3,i=t.length,s=new Array(n),o=new Array(i/3),u=new Array(i),p=0;p<n;p++)s[p]={indexOffset:0,count:0,currentCount:0};var d=0;for(p=0;p<i;p+=3){var l=t[p],y=t[p+1],f=t[p+2],v=3*l,m=3*y,c=3*f;E.x=a[v],E.y=a[1+v],E.z=a[2+v],N.x=a[m],N.y=a[1+m],N.z=a[2+m],D.x=a[c],D.y=a[1+c],D.z=a[2+c],s[l].count++,s[y].count++,s[f].count++,R.Cartesian3.subtract(N,E,N),R.Cartesian3.subtract(D,E,D),o[d]=R.Cartesian3.cross(N,D,new R.Cartesian3),d++}var C,h=0;for(p=0;p<n;p++)s[p].indexOffset+=h,h+=s[p].count;for(p=d=0;p<i;p+=3)u[(C=s[t[p]]).indexOffset+C.currentCount]=d,C.currentCount++,u[(C=s[t[p+1]]).indexOffset+C.currentCount]=d,C.currentCount++,u[(C=s[t[p+2]]).indexOffset+C.currentCount]=d,C.currentCount++,d++;var b=new Float32Array(3*n);for(p=0;p<n;p++){var g=3*p;if(C=s[p],R.Cartesian3.clone(R.Cartesian3.ZERO,O),0<C.count){for(d=0;d<C.count;d++)R.Cartesian3.add(O,o[u[C.indexOffset+d]],O);R.Cartesian3.equalsEpsilon(R.Cartesian3.ZERO,O,L.CesiumMath.EPSILON10)&&R.Cartesian3.clone(o[u[C.indexOffset]],O)}R.Cartesian3.equalsEpsilon(R.Cartesian3.ZERO,O,L.CesiumMath.EPSILON10)&&(O.z=1),R.Cartesian3.normalize(O,O),b[g]=O.x,b[1+g]=O.y,b[2+g]=O.z}return e.attributes.normal=new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),e};var M=new R.Cartesian3,G=new R.Cartesian3,F=new R.Cartesian3;r.computeTangentAndBitangent=function(e){e.attributes;for(var t=e.indices,r=e.attributes.position.values,a=e.attributes.normal.values,n=e.attributes.st.values,i=e.attributes.position.values.length/3,s=t.length,o=new Array(3*i),u=0;u<o.length;u++)o[u]=0;for(u=0;u<s;u+=3){var p,d=t[u],l=t[u+1],y=t[u+2],f=3*l,v=3*y,m=2*d,c=2*l,C=2*y,h=r[p=3*d],b=r[p+1],l=r[p+2],y=n[m],d=n[1+m],m=n[1+c]-d,d=n[1+C]-d,y=1/((n[c]-y)*d-(n[C]-y)*m),h=(d*(r[f]-h)-m*(r[v]-h))*y,b=(d*(r[f+1]-b)-m*(r[v+1]-b))*y,y=(d*(r[f+2]-l)-m*(r[v+2]-l))*y;o[p]+=h,o[p+1]+=b,o[p+2]+=y,o[f]+=h,o[f+1]+=b,o[f+2]+=y,o[v]+=h,o[v+1]+=b,o[v+2]+=y}var g=new Float32Array(3*i),A=new Float32Array(3*i);for(u=0;u<i;u++){f=(p=3*u)+1,v=p+2;var T=R.Cartesian3.fromArray(a,p,M),x=R.Cartesian3.fromArray(o,p,F),P=R.Cartesian3.dot(T,x);R.Cartesian3.multiplyByScalar(T,P,G),R.Cartesian3.normalize(R.Cartesian3.subtract(x,G,x),x),g[p]=x.x,g[f]=x.y,g[v]=x.z,R.Cartesian3.normalize(R.Cartesian3.cross(T,x,x),x),A[p]=x.x,A[f]=x.y,A[v]=x.z}return e.attributes.tangent=new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g}),e.attributes.bitangent=new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A}),e};var B=new R.Cartesian2,k=new R.Cartesian3,_=new R.Cartesian3,q=new R.Cartesian3,U=new R.Cartesian2;function C(e){switch(e.primitiveType){case w.PrimitiveType.TRIANGLE_FAN:return function(e){var t=w.Geometry.computeNumberOfVertices(e),r=S.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=1,r[1]=0,r[2]=2;for(var a=3,n=3;n<t;++n)r[a++]=n-1,r[a++]=0,r[a++]=n;return e.indices=r,e.primitiveType=w.PrimitiveType.TRIANGLES,e}(e);case w.PrimitiveType.TRIANGLE_STRIP:return function(e){var t=w.Geometry.computeNumberOfVertices(e),r=S.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=0,r[1]=1,r[2]=2,3<t&&(r[3]=0,r[4]=2,r[5]=3);for(var a=6,n=3;n<t-1;n+=2)r[a++]=n,r[a++]=n-1,r[a++]=n+1,n+2<t&&(r[a++]=n,r[a++]=n+1,r[a++]=n+2);return e.indices=r,e.primitiveType=w.PrimitiveType.TRIANGLES,e}(e);case w.PrimitiveType.TRIANGLES:return function(e){if(V.defined(e.indices))return e;for(var t=w.Geometry.computeNumberOfVertices(e),r=S.IndexDatatype.createTypedArray(t,t),a=0;a<t;++a)r[a]=a;return e.indices=r,e}(e);case w.PrimitiveType.LINE_STRIP:return function(e){var t=w.Geometry.computeNumberOfVertices(e),r=S.IndexDatatype.createTypedArray(t,2*(t-1));r[0]=0,r[1]=1;for(var a=2,n=2;n<t;++n)r[a++]=n-1,r[a++]=n;return e.indices=r,e.primitiveType=w.PrimitiveType.LINES,e}(e);case w.PrimitiveType.LINE_LOOP:return function(e){var t=w.Geometry.computeNumberOfVertices(e),r=S.IndexDatatype.createTypedArray(t,2*t);r[0]=0,r[1]=1;for(var a=2,n=2;n<t;++n)r[a++]=n-1,r[a++]=n;return r[a++]=t-1,r[a]=0,e.indices=r,e.primitiveType=w.PrimitiveType.LINES,e}(e);case w.PrimitiveType.LINES:return function(e){if(V.defined(e.indices))return e;for(var t=w.Geometry.computeNumberOfVertices(e),r=S.IndexDatatype.createTypedArray(t,t),a=0;a<t;++a)r[a]=a;return e.indices=r,e}(e)}return e}function h(e,t){Math.abs(e.y)<L.CesiumMath.EPSILON6&&(e.y=t?-L.CesiumMath.EPSILON6:L.CesiumMath.EPSILON6)}r.compressVertices=function(e){var t=e.attributes.extrudeDirection;if(V.defined(t)){for(var r=t.values,a=r.length/3,n=new Float32Array(2*a),i=0,s=0;s<a;++s)R.Cartesian3.fromArray(r,3*s,k),R.Cartesian3.equals(k,R.Cartesian3.ZERO)?i+=2:(U=A.AttributeCompression.octEncodeInRange(k,65535,U),n[i++]=U.x,n[i++]=U.y);return e.attributes.compressedAttributes=new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:n}),delete e.attributes.extrudeDirection,e}var o=e.attributes.normal,u=e.attributes.st,p=V.defined(o),d=V.defined(u);if(!p&&!d)return e;var l,y,f,v,m=e.attributes.tangent,t=e.attributes.bitangent,c=V.defined(m),C=V.defined(t);p&&(l=o.values),d&&(y=u.values),c&&(f=m.values),C&&(v=t.values);m=a=(p?l:y).length/(p?3:2),t=d&&p?2:1;m*=t+=c||C?1:0;var h=new Float32Array(m),b=0;for(s=0;s<a;++s){d&&(R.Cartesian2.fromArray(y,2*s,B),h[b++]=A.AttributeCompression.compressTextureCoordinates(B));var g=3*s;p&&V.defined(f)&&V.defined(v)?(R.Cartesian3.fromArray(l,g,k),R.Cartesian3.fromArray(f,g,_),R.Cartesian3.fromArray(v,g,q),A.AttributeCompression.octPack(k,_,q,B),h[b++]=B.x,h[b++]=B.y):(p&&(R.Cartesian3.fromArray(l,g,k),h[b++]=A.AttributeCompression.octEncodeFloat(k)),c&&(R.Cartesian3.fromArray(f,g,k),h[b++]=A.AttributeCompression.octEncodeFloat(k)),C&&(R.Cartesian3.fromArray(v,g,k),h[b++]=A.AttributeCompression.octEncodeFloat(k)))}return e.attributes.compressedAttributes=new w.GeometryAttribute({componentDatatype:L.ComponentDatatype.FLOAT,componentsPerAttribute:t,values:h}),p&&delete e.attributes.normal,d&&delete e.attributes.st,C&&delete e.attributes.bitangent,c&&delete e.attributes.tangent,e};var b=new R.Cartesian3;function Y(e,t,r,a){R.Cartesian3.add(e,R.Cartesian3.multiplyByScalar(R.Cartesian3.subtract(t,e,b),e.y/(e.y-t.y),b),r),R.Cartesian3.clone(r,a),h(r,!0),h(a,!1)}var Z=new R.Cartesian3,H=new R.Cartesian3,W=new R.Cartesian3,X=new R.Cartesian3,j={positions:new Array(7),indices:new Array(9)};function J(e,t,r){if(!(0<=e.x||0<=t.x||0<=r.x)){!function(e,t,r){if(0!==e.y&&0!==t.y&&0!==r.y)return h(e,e.y<0),h(t,t.y<0),h(r,r.y<0);var a=Math.abs(e.y),n=Math.abs(t.y),i=Math.abs(r.y),n=n<a?i<a?L.CesiumMath.sign(e.y):L.CesiumMath.sign(r.y):i<n?L.CesiumMath.sign(t.y):L.CesiumMath.sign(r.y);h(e,n=n<0),h(t,n),h(r,n)}(e,t,r);var a=e.y<0,n=t.y<0,i=r.y<0,s=0;s+=a?1:0,s+=n?1:0;var o=j.indices;1==(s+=i?1:0)?(o[1]=3,o[2]=4,o[5]=6,o[7]=6,o[8]=5,a?(Y(e,t,Z,W),Y(e,r,H,X),o[0]=0,o[3]=1,o[4]=2,o[6]=1):n?(Y(t,r,Z,W),Y(t,e,H,X),o[0]=1,o[3]=2,o[4]=0,o[6]=2):i&&(Y(r,e,Z,W),Y(r,t,H,X),o[0]=2,o[3]=0,o[4]=1,o[6]=0)):2==s&&(o[2]=4,o[4]=4,o[5]=3,o[7]=5,o[8]=6,a?n?i||(Y(r,e,Z,W),Y(r,t,H,X),o[0]=0,o[1]=1,o[3]=0,o[6]=2):(Y(t,r,Z,W),Y(t,e,H,X),o[0]=2,o[1]=0,o[3]=2,o[6]=1):(Y(e,t,Z,W),Y(e,r,H,X),o[0]=1,o[1]=2,o[3]=1,o[6]=0));o=j.positions;return o[0]=e,o[1]=t,o[2]=r,o.length=3,1!=s&&2!=s||(o[3]=Z,o[4]=H,o[5]=W,o[6]=X,o.length=7),j}}function K(e,t){var r=e.attributes;if(0!==r.position.values.length){for(var a in r)r.hasOwnProperty(a)&&V.defined(r[a])&&V.defined(r[a].values)&&((a=r[a]).values=L.ComponentDatatype.createTypedArray(a.componentDatatype,a.values));var n=w.Geometry.computeNumberOfVertices(e);return e.indices=S.IndexDatatype.createTypedArray(n,e.indices),t&&(e.boundingSphere=P.BoundingSphere.fromVertices(r.position.values)),e}}function Q(e){var t,r,a=e.attributes,n={};for(t in a)a.hasOwnProperty(t)&&V.defined(a[t])&&V.defined(a[t].values)&&(r=a[t],n[t]=new w.GeometryAttribute({componentDatatype:r.componentDatatype,componentsPerAttribute:r.componentsPerAttribute,normalize:r.normalize,values:[]}));return new w.Geometry({attributes:n,indices:[],primitiveType:e.primitiveType})}function $(e,t,r){var a=V.defined(e.geometry.boundingSphere);t=K(t,a),r=K(r,a),V.defined(r)&&!V.defined(t)?e.geometry=r:!V.defined(r)&&V.defined(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=r,e.geometry=void 0)}function ee(u,p){var d=new u,l=new u,y=new u;return function(e,t,r,a,n,i,s,o){e=u.fromArray(n,e*p,d),t=u.fromArray(n,t*p,l),r=u.fromArray(n,r*p,y);u.multiplyByScalar(e,a.x,e),u.multiplyByScalar(t,a.y,t),u.multiplyByScalar(r,a.z,r);e=u.add(e,t,e);u.add(e,r,e),o&&u.normalize(e,e),u.pack(e,i,s*p)}}var te=ee(R.Cartesian4,4),re=ee(R.Cartesian3,3),ae=ee(R.Cartesian2,2),ne=function(e,t,r,a,n,i,s){e=n[e]*a.x,t=n[t]*a.y,a=n[r]*a.z;i[s]=e+t+a>L.CesiumMath.EPSILON6?1:0},ie=new R.Cartesian3,se=new R.Cartesian3,oe=new R.Cartesian3,ue=new R.Cartesian3;function pe(e,t,r,a,n,i,s,o,u,p,d,l,y,f,v,m){if(V.defined(i)||V.defined(s)||V.defined(o)||V.defined(u)||V.defined(p)||0!==f){var c,C=function(e,t,r,a,n){var i,s,o,u,p,d,l;if(V.defined(n)||(n=new R.Cartesian3),V.defined(t.z)){if(R.Cartesian3.equalsEpsilon(e,t,L.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_X,n);if(R.Cartesian3.equalsEpsilon(e,r,L.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_Y,n);if(R.Cartesian3.equalsEpsilon(e,a,L.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_Z,n);i=R.Cartesian3.subtract(r,t,g),s=R.Cartesian3.subtract(a,t,T),o=R.Cartesian3.subtract(e,t,x),u=R.Cartesian3.dot(i,i),y=R.Cartesian3.dot(i,s),p=R.Cartesian3.dot(i,o),d=R.Cartesian3.dot(s,s),l=R.Cartesian3.dot(s,o)}else{if(R.Cartesian2.equalsEpsilon(e,t,L.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_X,n);if(R.Cartesian2.equalsEpsilon(e,r,L.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_Y,n);if(R.Cartesian2.equalsEpsilon(e,a,L.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_Z,n);i=R.Cartesian2.subtract(r,t,g),s=R.Cartesian2.subtract(a,t,T),o=R.Cartesian2.subtract(e,t,x),u=R.Cartesian2.dot(i,i),y=R.Cartesian2.dot(i,s),p=R.Cartesian2.dot(i,o),d=R.Cartesian2.dot(s,s),l=R.Cartesian2.dot(s,o)}n.y=d*p-y*l,n.z=u*l-y*p;var y=u*d-y*y;return 0!==n.y&&(n.y/=y),0!==n.z&&(n.z/=y),n.x=1-n.y-n.z,n}(a,R.Cartesian3.fromArray(n,3*e,ie),R.Cartesian3.fromArray(n,3*t,se),R.Cartesian3.fromArray(n,3*r,oe),ue);if(V.defined(i)&&re(e,t,r,C,i,l.normal.values,m,!0),V.defined(p)&&(n=R.Cartesian3.fromArray(p,3*e,ie),i=R.Cartesian3.fromArray(p,3*t,se),p=R.Cartesian3.fromArray(p,3*r,oe),R.Cartesian3.multiplyByScalar(n,C.x,n),R.Cartesian3.multiplyByScalar(i,C.y,i),R.Cartesian3.multiplyByScalar(p,C.z,p),R.Cartesian3.equals(n,R.Cartesian3.ZERO)&&R.Cartesian3.equals(i,R.Cartesian3.ZERO)&&R.Cartesian3.equals(p,R.Cartesian3.ZERO)?((c=ie).x=0,c.y=0,c.z=0):(c=R.Cartesian3.add(n,i,n),R.Cartesian3.add(c,p,c),R.Cartesian3.normalize(c,c)),R.Cartesian3.pack(c,l.extrudeDirection.values,3*m)),V.defined(d)&&ne(e,t,r,C,d,l.applyOffset.values,m),V.defined(s)&&re(e,t,r,C,s,l.tangent.values,m,!0),V.defined(o)&&re(e,t,r,C,o,l.bitangent.values,m,!0),V.defined(u)&&ae(e,t,r,C,u,l.st.values,m),0<f)for(var h=0;h<f;h++){var b=y[h];!function(e,t,r,a,n,i,s){var o=i.componentsPerAttribute,u=i.values,p=s.values;switch(o){case 4:te(e,t,r,a,u,p,n,!1);break;case 3:re(e,t,r,a,u,p,n,!1);break;case 2:ae(e,t,r,a,u,p,n,!1);break;default:p[n]=u[e]*a.x+u[t]*a.y+u[r]*a.z}}(e,t,r,C,m,v[b],l[b])}}}function de(e,t,r,a,n,i){var s=e.position.values.length/3;if(-1===n)return e.position.values.push(i.x,i.y,i.z),t.push(s),s;a=a[n],n=r[a];return-1===n?(r[a]=s,e.position.values.push(i.x,i.y,i.z),t.push(s),s):(t.push(n),n)}var le={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function ye(e){var t,r=e.geometry,a=r.attributes,n=a.position.values,i=V.defined(a.normal)?a.normal.values:void 0,s=V.defined(a.bitangent)?a.bitangent.values:void 0,o=V.defined(a.tangent)?a.tangent.values:void 0,u=V.defined(a.st)?a.st.values:void 0,p=V.defined(a.extrudeDirection)?a.extrudeDirection.values:void 0,d=V.defined(a.applyOffset)?a.applyOffset.values:void 0,l=r.indices,y=[];for(t in a)a.hasOwnProperty(t)&&!le[t]&&V.defined(a[t])&&y.push(t);var f,v,m=y.length,c=Q(r),C=Q(r),h=[];h.length=n.length/3;var b=[];for(b.length=n.length/3,A=0;A<h.length;++A)h[A]=-1,b[A]=-1;for(var g=l.length,A=0;A<g;A+=3){var T=l[A],x=l[A+1],P=l[A+2],w=R.Cartesian3.fromArray(n,3*T),S=R.Cartesian3.fromArray(n,3*x),I=R.Cartesian3.fromArray(n,3*P),O=J(w,S,I);if(V.defined(O)&&3<O.positions.length)for(var E=O.positions,N=O.indices,L=N.length,z=0;z<L;++z){var D=N[z],M=E[D],G=M.y<0?(f=C.attributes,v=C.indices,h):(f=c.attributes,v=c.indices,b);pe(T,x,P,M,n,i,o,s,u,p,d,f,y,m,a,de(f,v,G,l,D<3?A+D:-1,M))}else V.defined(O)&&(w=O.positions[0],S=O.positions[1],I=O.positions[2]),G=w.y<0?(f=C.attributes,v=C.indices,h):(f=c.attributes,v=c.indices,b),pe(T,x,P,w,n,i,o,s,u,p,d,f,y,m,a,de(f,v,G,l,A,w)),pe(T,x,P,S,n,i,o,s,u,p,d,f,y,m,a,de(f,v,G,l,A+1,S)),pe(T,x,P,I,n,i,o,s,u,p,d,f,y,m,a,de(f,v,G,l,A+2,I))}$(e,C,c)}var fe=a.Plane.fromPointNormal(R.Cartesian3.ZERO,R.Cartesian3.UNIT_Y),ve=new R.Cartesian3,me=new R.Cartesian3;function ce(e,t,r,a,n,i,s){V.defined(s)&&(a=R.Cartesian3.fromArray(a,3*e,ie),R.Cartesian3.equalsEpsilon(a,r,L.CesiumMath.EPSILON10)?i.applyOffset.values[n]=s[e]:i.applyOffset.values[n]=s[t])}function Ce(e){var t,r=e.geometry,a=r.attributes,n=a.position.values,i=V.defined(a.applyOffset)?a.applyOffset.values:void 0,s=r.indices,o=Q(r),u=Q(r),p=s.length,d=[];d.length=n.length/3;var l=[];for(l.length=n.length/3,t=0;t<d.length;++t)d[t]=-1,l[t]=-1;for(t=0;t<p;t+=2){var y=s[t],f=s[t+1],v=R.Cartesian3.fromArray(n,3*y,ie),m=R.Cartesian3.fromArray(n,3*f,se);Math.abs(v.y)<L.CesiumMath.EPSILON6&&(v.y<0?v.y=-L.CesiumMath.EPSILON6:v.y=L.CesiumMath.EPSILON6),Math.abs(m.y)<L.CesiumMath.EPSILON6&&(m.y<0?m.y=-L.CesiumMath.EPSILON6:m.y=L.CesiumMath.EPSILON6);var c,C,h,b,g=o.attributes,A=o.indices,T=l,x=u.attributes,P=u.indices,w=d,S=z.IntersectionTests.lineSegmentPlane(v,m,fe,oe);V.defined(S)?(c=R.Cartesian3.multiplyByScalar(R.Cartesian3.UNIT_Y,5*L.CesiumMath.EPSILON9,ve),v.y<0&&(R.Cartesian3.negate(c,c),g=u.attributes,A=u.indices,T=d,x=o.attributes,P=o.indices,w=l),C=R.Cartesian3.add(S,c,me),ce(y,f,v,n,de(g,A,T,s,t,v),g,i),ce(y,f,C,n,de(g,A,T,s,-1,C),g,i),R.Cartesian3.negate(c,c),R.Cartesian3.add(S,c,C),ce(y,f,C,n,de(x,P,w,s,-1,C),x,i),ce(y,f,m,n,de(x,P,w,s,t+1,m),x,i)):(x=v.y<0?(h=u.attributes,b=u.indices,d):(h=o.attributes,b=o.indices,l),ce(y,f,v,n,de(h,b,x,s,t,v),h,i),ce(y,f,m,n,de(h,b,x,s,t+1,m),h,i))}$(e,u,o)}var he=new R.Cartesian2,be=new R.Cartesian2,ge=new R.Cartesian3,Ae=new R.Cartesian3,Te=new R.Cartesian3,xe=new R.Cartesian3,Pe=new R.Cartesian3,we=new R.Cartesian3,Se=new R.Cartesian4;function Ie(e){for(var e=e.attributes,t=e.position.values,r=e.prevPosition.values,a=e.nextPosition.values,n=t.length,i=0;i<n;i+=3){var s,o=R.Cartesian3.unpack(t,i,ge);0<o.x||(s=R.Cartesian3.unpack(r,i,Ae),(o.y<0&&0<s.y||0<o.y&&s.y<0)&&(0<i-3?(r[i]=t[i-3],r[i+1]=t[i-2],r[i+2]=t[i-1]):R.Cartesian3.pack(o,r,i)),s=R.Cartesian3.unpack(a,i,Te),(o.y<0&&0<s.y||0<o.y&&s.y<0)&&(i+3<n?(a[i]=t[i+3],a[i+1]=t[i+4],a[i+2]=t[i+5]):R.Cartesian3.pack(o,a,i)))}}var Oe=5*L.CesiumMath.EPSILON9,Ee=L.CesiumMath.EPSILON6;r.splitLongitude=function(e){var t=e.geometry,r=t.boundingSphere;if(V.defined(r)&&(0<r.center.x-r.radius||P.BoundingSphere.intersectPlane(r,a.Plane.ORIGIN_ZX_PLANE)!==P.Intersect.INTERSECTING))return e;if(t.geometryType!==w.GeometryType.NONE)switch(t.geometryType){case w.GeometryType.POLYLINES:!function(e){for(var t=e.geometry,r=t.attributes,a=r.position.values,n=r.prevPosition.values,i=r.nextPosition.values,s=r.expandAndWidth.values,o=V.defined(r.st)?r.st.values:void 0,u=V.defined(r.color)?r.color.values:void 0,p=Q(t),d=Q(t),l=!1,y=a.length/3,f=0;f<y;f+=4){var v=f,m=f+2,c=R.Cartesian3.fromArray(a,3*v,ge),C=R.Cartesian3.fromArray(a,3*m,Ae);if(Math.abs(c.y)<Ee)for(c.y=Ee*(C.y<0?-1:1),a[3*f+1]=c.y,a[3*(f+1)+1]=c.y,O=3*v;O<3*v+12;O+=3)n[O]=a[3*f],n[O+1]=a[3*f+1],n[O+2]=a[3*f+2];if(Math.abs(C.y)<Ee)for(C.y=Ee*(c.y<0?-1:1),a[3*(f+2)+1]=C.y,a[3*(f+3)+1]=C.y,O=3*v;O<3*v+12;O+=3)i[O]=a[3*(f+2)],i[O+1]=a[3*(f+2)+1],i[O+2]=a[3*(f+2)+2];var h=p.attributes,b=p.indices,g=d.attributes,A=d.indices,T=z.IntersectionTests.lineSegmentPlane(c,C,fe,xe);if(V.defined(T)){var l=!0,x=R.Cartesian3.multiplyByScalar(R.Cartesian3.UNIT_Y,Oe,Pe);c.y<0&&(R.Cartesian3.negate(x,x),h=d.attributes,b=d.indices,g=p.attributes,A=p.indices);var P=R.Cartesian3.add(T,x,we);h.position.values.push(c.x,c.y,c.z,c.x,c.y,c.z),h.position.values.push(P.x,P.y,P.z),h.position.values.push(P.x,P.y,P.z),h.prevPosition.values.push(n[3*v],n[3*v+1],n[3*v+2]),h.prevPosition.values.push(n[3*v+3],n[3*v+4],n[3*v+5]),h.prevPosition.values.push(c.x,c.y,c.z,c.x,c.y,c.z),h.nextPosition.values.push(P.x,P.y,P.z),h.nextPosition.values.push(P.x,P.y,P.z),h.nextPosition.values.push(P.x,P.y,P.z),h.nextPosition.values.push(P.x,P.y,P.z),R.Cartesian3.negate(x,x),R.Cartesian3.add(T,x,P),g.position.values.push(P.x,P.y,P.z),g.position.values.push(P.x,P.y,P.z),g.position.values.push(C.x,C.y,C.z,C.x,C.y,C.z),g.prevPosition.values.push(P.x,P.y,P.z),g.prevPosition.values.push(P.x,P.y,P.z),g.prevPosition.values.push(P.x,P.y,P.z),g.prevPosition.values.push(P.x,P.y,P.z),g.nextPosition.values.push(C.x,C.y,C.z,C.x,C.y,C.z),g.nextPosition.values.push(i[3*m],i[3*m+1],i[3*m+2]),g.nextPosition.values.push(i[3*m+3],i[3*m+4],i[3*m+5]);var w=R.Cartesian2.fromArray(s,2*v,he),S=Math.abs(w.y);h.expandAndWidth.values.push(-1,S,1,S),h.expandAndWidth.values.push(-1,-S,1,-S),g.expandAndWidth.values.push(-1,S,1,S),g.expandAndWidth.values.push(-1,-S,1,-S);x=R.Cartesian3.magnitudeSquared(R.Cartesian3.subtract(T,c,Te));if(x/=R.Cartesian3.magnitudeSquared(R.Cartesian3.subtract(C,c,Te)),V.defined(u)){for(var P=R.Cartesian4.fromArray(u,4*v,Se),I=R.Cartesian4.fromArray(u,4*m,Se),w=L.CesiumMath.lerp(P.x,I.x,x),S=L.CesiumMath.lerp(P.y,I.y,x),T=L.CesiumMath.lerp(P.z,I.z,x),I=L.CesiumMath.lerp(P.w,I.w,x),O=4*v;O<4*v+8;++O)h.color.values.push(u[O]);for(h.color.values.push(w,S,T,I),h.color.values.push(w,S,T,I),g.color.values.push(w,S,T,I),g.color.values.push(w,S,T,I),O=4*m;O<4*m+8;++O)g.color.values.push(u[O])}if(V.defined(o)){var I=R.Cartesian2.fromArray(o,2*v,he),E=R.Cartesian2.fromArray(o,2*(f+3),be),x=L.CesiumMath.lerp(I.x,E.x,x);for(O=2*v;O<2*v+4;++O)h.st.values.push(o[O]);for(h.st.values.push(x,I.y),h.st.values.push(x,E.y),g.st.values.push(x,I.y),g.st.values.push(x,E.y),O=2*m;O<2*m+4;++O)g.st.values.push(o[O])}E=h.position.values.length/3-4,b.push(E,E+2,E+1),b.push(E+1,E+2,E+3),E=g.position.values.length/3-4,A.push(E,E+2,E+1),A.push(E+1,E+2,E+3)}else{var N,A=c.y<0?(N=d.attributes,d.indices):(N=p.attributes,p.indices);for(N.position.values.push(c.x,c.y,c.z),N.position.values.push(c.x,c.y,c.z),N.position.values.push(C.x,C.y,C.z),N.position.values.push(C.x,C.y,C.z),O=3*f;O<3*f+12;++O)N.prevPosition.values.push(n[O]),N.nextPosition.values.push(i[O]);for(O=2*f;O<2*f+8;++O)N.expandAndWidth.values.push(s[O]),V.defined(o)&&N.st.values.push(o[O]);if(V.defined(u))for(O=4*f;O<4*f+16;++O)N.color.values.push(u[O]);E=N.position.values.length/3-4,A.push(E,E+2,E+1),A.push(E+1,E+2,E+3)}}l&&(Ie(d),Ie(p)),$(e,d,p)}(e);break;case w.GeometryType.TRIANGLES:ye(e);break;case w.GeometryType.LINES:Ce(e)}else C(t),t.primitiveType===w.PrimitiveType.TRIANGLES?ye(e):t.primitiveType===w.PrimitiveType.LINES&&Ce(e);return e},e.GeometryPipeline=r});
