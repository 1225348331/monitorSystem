define(["./when-4bbc8319","./Matrix2-fa56e6dd","./Transforms-d150322f","./ComponentDatatype-bfa70d4a","./Check-ba987d16","./GeometryAttribute-e8a7fd74","./GeometryAttributes-7827a6c2","./IndexDatatype-81fb2229","./WallGeometryLibrary-d6e86130","./RuntimeError-55ee6bc3","./combine-83860057","./WebGLConstants-1c8239cc","./arrayRemoveDuplicates-48046ac4","./PolylinePipeline-dbf73dd5","./EllipsoidGeodesic-89883ae6","./EllipsoidRhumbLine-7ae2cb99","./IntersectionTests-d4f2fcd6","./Plane-034a4517"],function(v,b,C,H,e,A,k,w,x,i,t,a,n,r,o,s,l,d){"use strict";var G=new b.Cartesian3,L=new b.Cartesian3;function m(e){var i=(e=v.defaultValue(e,v.defaultValue.EMPTY_OBJECT)).positions,t=e.maximumHeights,a=e.minimumHeights,n=v.defaultValue(e.granularity,H.CesiumMath.RADIANS_PER_DEGREE),e=v.defaultValue(e.ellipsoid,b.Ellipsoid.WGS84);this._positions=i,this._minimumHeights=a,this._maximumHeights=t,this._granularity=n,this._ellipsoid=b.Ellipsoid.clone(e),this._workerName="createWallOutlineGeometry";i=1+i.length*b.Cartesian3.packedLength+2;v.defined(a)&&(i+=a.length),v.defined(t)&&(i+=t.length),this.packedLength=i+b.Ellipsoid.packedLength+1}m.pack=function(e,i,t){var a;t=v.defaultValue(t,0);var n=e._positions,r=n.length;for(i[t++]=r,a=0;a<r;++a,t+=b.Cartesian3.packedLength)b.Cartesian3.pack(n[a],i,t);var o=e._minimumHeights,r=v.defined(o)?o.length:0;if(i[t++]=r,v.defined(o))for(a=0;a<r;++a)i[t++]=o[a];var s=e._maximumHeights;if(r=v.defined(s)?s.length:0,i[t++]=r,v.defined(s))for(a=0;a<r;++a)i[t++]=s[a];return b.Ellipsoid.pack(e._ellipsoid,i,t),i[t+=b.Ellipsoid.packedLength]=e._granularity,i};var u=b.Ellipsoid.clone(b.Ellipsoid.UNIT_SPHERE),p={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:u,granularity:void 0};return m.unpack=function(e,i,t){i=v.defaultValue(i,0);for(var a,n,r=e[i++],o=new Array(r),s=0;s<r;++s,i+=b.Cartesian3.packedLength)o[s]=b.Cartesian3.unpack(e,i);if(0<(r=e[i++]))for(a=new Array(r),s=0;s<r;++s)a[s]=e[i++];if(0<(r=e[i++]))for(n=new Array(r),s=0;s<r;++s)n[s]=e[i++];var l=b.Ellipsoid.unpack(e,i,u),d=e[i+=b.Ellipsoid.packedLength];return v.defined(t)?(t._positions=o,t._minimumHeights=a,t._maximumHeights=n,t._ellipsoid=b.Ellipsoid.clone(l,t._ellipsoid),t._granularity=d,t):(p.positions=o,p.minimumHeights=a,p.maximumHeights=n,p.granularity=d,new m(p))},m.fromConstantHeights=function(e){var i=(e=v.defaultValue(e,v.defaultValue.EMPTY_OBJECT)).positions,t=e.minimumHeight,a=e.maximumHeight,n=v.defined(t),r=v.defined(a);if(n||r)for(var o=i.length,s=n?new Array(o):void 0,l=r?new Array(o):void 0,d=0;d<o;++d)n&&(s[d]=t),r&&(l[d]=a);return new m({positions:i,maximumHeights:l,minimumHeights:s,ellipsoid:e.ellipsoid})},m.createGeometry=function(e){var i=e._positions,t=e._minimumHeights,a=e._maximumHeights,n=e._granularity,e=e._ellipsoid,t=x.WallGeometryLibrary.computePositions(e,i,a,t,n,!1);if(v.defined(t)){var r=t.bottomPositions,o=t.topPositions,s=o.length,n=2*s,l=new Float64Array(n),d=0;for(s/=3,h=0;h<s;++h){var m=3*h,u=b.Cartesian3.fromArray(o,m,G),m=b.Cartesian3.fromArray(r,m,L);l[d++]=m.x,l[d++]=m.y,l[d++]=m.z,l[d++]=u.x,l[d++]=u.y,l[d++]=u.z}for(var t=new k.GeometryAttributes({position:new A.GeometryAttribute({componentDatatype:H.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})}),p=n/3,f=w.IndexDatatype.createTypedArray(p,n=2*p-4+p),c=0,h=0;h<p-2;h+=2){var g=h,y=h+2,_=b.Cartesian3.fromArray(l,3*g,G),E=b.Cartesian3.fromArray(l,3*y,L);b.Cartesian3.equalsEpsilon(_,E,H.CesiumMath.EPSILON10)||(_=h+3,f[c++]=E=h+1,f[c++]=g,f[c++]=E,f[c++]=_,f[c++]=g,f[c++]=y)}return f[c++]=p-2,f[c++]=p-1,new A.Geometry({attributes:t,indices:f,primitiveType:A.PrimitiveType.LINES,boundingSphere:new C.BoundingSphere.fromVertices(l)})}},function(e,i){return(e=v.defined(i)?m.unpack(e,i):e)._ellipsoid=b.Ellipsoid.clone(e._ellipsoid),m.createGeometry(e)}});
