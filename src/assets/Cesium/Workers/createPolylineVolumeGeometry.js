define(["./when-4bbc8319","./Matrix2-fa56e6dd","./arrayRemoveDuplicates-48046ac4","./BoundingRectangle-f17163d6","./Transforms-d150322f","./ComponentDatatype-bfa70d4a","./PolylineVolumeGeometryLibrary-62b3c541","./Check-ba987d16","./GeometryAttribute-e8a7fd74","./GeometryAttributes-7827a6c2","./GeometryPipeline-91e25716","./IndexDatatype-81fb2229","./PolygonPipeline-65365f79","./VertexFormat-33d5a7e0","./RuntimeError-55ee6bc3","./combine-83860057","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-fb029ce5","./AxisAlignedBoundingBox-9aec5e41","./IntersectionTests-d4f2fcd6","./Plane-034a4517","./PolylinePipeline-dbf73dd5","./EllipsoidGeodesic-89883ae6","./EllipsoidRhumbLine-7ae2cb99","./AttributeCompression-943b6739","./EncodedCartesian3-77992927"],function(d,B,i,r,I,O,N,e,W,U,M,z,q,y,t,n,a,o,l,s,p,c,u,m,g,h){"use strict";function f(e){var t=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._useDistanceST=d.defaultValue(e.useDistanceST,!1),this._positions=t,this._shape=n,this._ellipsoid=B.Ellipsoid.clone(d.defaultValue(e.ellipsoid,B.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,N.CornerType.ROUNDED),this._vertexFormat=y.VertexFormat.clone(d.defaultValue(e.vertexFormat,y.VertexFormat.DEFAULT)),this._granularity=d.defaultValue(e.granularity,O.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";t=1+t.length*B.Cartesian3.packedLength;t+=1+n.length*B.Cartesian2.packedLength,this.packedLength=t+B.Ellipsoid.packedLength+y.VertexFormat.packedLength+3}f.pack=function(e,t,n){var a;n=d.defaultValue(n,0);var i=e._positions,r=i.length;for(t[n++]=r,a=0;a<r;++a,n+=B.Cartesian3.packedLength)B.Cartesian3.pack(i[a],t,n);var o=e._shape,r=o.length;for(t[n++]=r,a=0;a<r;++a,n+=B.Cartesian2.packedLength)B.Cartesian2.pack(o[a],t,n);return B.Ellipsoid.pack(e._ellipsoid,t,n),n+=B.Ellipsoid.packedLength,y.VertexFormat.pack(e._vertexFormat,t,n),n+=y.VertexFormat.packedLength,t[n++]=e._cornerType,t[n++]=e._granularity,t[n]=e._useDistanceST,t};var v=B.Ellipsoid.clone(B.Ellipsoid.UNIT_SPHERE),b=new y.VertexFormat,_={polylinePositions:void 0,shapePositions:void 0,ellipsoid:v,vertexFormat:b,cornerType:void 0,granularity:void 0,useDistanceST:!1};f.unpack=function(e,t,n){t=d.defaultValue(t,0);for(var a=e[t++],i=new Array(a),r=0;r<a;++r,t+=B.Cartesian3.packedLength)i[r]=B.Cartesian3.unpack(e,t);var a=e[t++],o=new Array(a);for(r=0;r<a;++r,t+=B.Cartesian2.packedLength)o[r]=B.Cartesian2.unpack(e,t);var l=B.Ellipsoid.unpack(e,t,v);t+=B.Ellipsoid.packedLength;var s=y.VertexFormat.unpack(e,t,b);t+=y.VertexFormat.packedLength;var p=e[t++],c=e[t++],u=e[t];return d.defined(n)?(n._positions=i,n._shape=o,n._ellipsoid=B.Ellipsoid.clone(l,n._ellipsoid),n._vertexFormat=y.VertexFormat.clone(s,n._vertexFormat),n._cornerType=p,n._granularity=c,n._useDistanceST=u,n):(_.polylinePositions=i,_.shapePositions=o,_.cornerType=p,_.granularity=c,_.useDistanceST=u,new f(_))};var P=new r.BoundingRectangle;return f.createGeometry=function(e){var t=e._positions,n=i.arrayRemoveDuplicates(t,B.Cartesian3.equalsEpsilon),a=e._shape,a=N.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(a);if(!(n.length<2||a.length<3)){q.PolygonPipeline.computeWindingOrder2D(a)===q.WindingOrder.CLOCKWISE&&a.reverse();t=r.BoundingRectangle.fromPoints(a,P);return function(e,t,n,a,i){var r=new U.GeometryAttributes;a.position&&(r.position=new W.GeometryAttribute({componentDatatype:O.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var o,l,s,p,c,u=t.length,d=e.length/3,y=(d-2*u)/(2*u),m=q.PolygonPipeline.triangulate(t),g=(y-1)*u*6+2*m.length,h=z.IndexDatatype.createTypedArray(d,g),f=2*u,v=0;for(A=0;A<y-1;A++){for(o=0;o<u-1;o++)c=(l=2*o+A*u*2)+f,p=(s=l+1)+f,h[v++]=s,h[v++]=l,h[v++]=p,h[v++]=p,h[v++]=l,h[v++]=c;p=(s=(l=2*u-2+A*u*2)+1)+f,c=l+f,h[v++]=s,h[v++]=l,h[v++]=p,h[v++]=p,h[v++]=l,h[v++]=c}if(a.st||a.tangent||a.bitangent){var b,_=[],P=0,E=new B.Cartesian3,T=new B.Cartesian3;if(i)for(_.push(0),A=0;A<y-1;A++)E.x=e[0+(b=A*u*2*3)],E.y=e[1+b],E.z=e[2+b],T.x=e[b+=2*u*3],T.y=e[1+b],T.z=e[2+b],P+=B.Cartesian3.distance(E,T),_.push(P);for(var k,C,x=new Float32Array(2*d),D=1/(y-1),V=1/n.height,L=n.height/2,F=0,A=0;A<y;A++){for(k=A*D,i&&(k=_[A]/P),C=V*(t[0].y+L),i&&(C=0),x[F++]=k,x[F++]=C,o=1;o<u;o++)C=V*(t[o].y+L),i&&(C=o/(u-1)),x[F++]=k,x[F++]=C,x[F++]=k,x[F++]=C;C=V*(t[0].y+L),i&&(C=0),x[F++]=k,x[F++]=C}for(o=0;o<u;o++)C=V*(t[o].y+L),i&&(C=o/(u-1)),x[F++]=k=0,x[F++]=C;for(o=0;o<u;o++)C=V*(t[o].y+L),i&&(C=o/(u-1)),x[F++]=k=(y-1)*D,x[F++]=C;r.st=new W.GeometryAttribute({componentDatatype:O.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(x)})}var G=d-2*u;for(A=0;A<m.length;A+=3){var w=m[A]+G,S=m[A+1]+G,R=m[A+2]+G;h[v++]=w,h[v++]=S,h[v++]=R,h[v++]=R+u,h[v++]=S+u,h[v++]=w+u}if(r=new W.Geometry({attributes:r,indices:h,boundingSphere:I.BoundingSphere.fromVertices(e),primitiveType:W.PrimitiveType.TRIANGLES}),a.normal&&(r=M.GeometryPipeline.computeNormal(r)),a.tangent||a.bitangent){try{r=M.GeometryPipeline.computeTangentAndBitangent(r)}catch(e){N.oneTimeWarning("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}a.tangent||(r.attributes.tangent=void 0),a.bitangent||(r.attributes.bitangent=void 0),a.st||(r.attributes.st=void 0)}return r}(N.PolylineVolumeGeometryLibrary.computePositions(n,a,t,e,!0),a,t,e._vertexFormat,e._useDistanceST)}},function(e,t){return(e=d.defined(t)?f.unpack(e,t):e)._ellipsoid=B.Ellipsoid.clone(e._ellipsoid),f.createGeometry(e)}});
