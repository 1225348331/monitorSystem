define(["./when-4bbc8319","./Matrix2-fa56e6dd","./arrayRemoveDuplicates-48046ac4","./BoundingRectangle-f17163d6","./Transforms-d150322f","./ComponentDatatype-bfa70d4a","./PolylineVolumeGeometryLibrary-62b3c541","./Check-ba987d16","./GeometryAttribute-e8a7fd74","./GeometryAttributes-7827a6c2","./IndexDatatype-81fb2229","./PolygonPipeline-65365f79","./RuntimeError-55ee6bc3","./combine-83860057","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-fb029ce5","./AxisAlignedBoundingBox-9aec5e41","./IntersectionTests-d4f2fcd6","./Plane-034a4517","./PolylinePipeline-dbf73dd5","./EllipsoidGeodesic-89883ae6","./EllipsoidRhumbLine-7ae2cb99"],function(d,c,a,o,u,y,r,e,h,g,f,l,i,n,t,s,p,m,E,v,P,_){"use strict";function b(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=i,this._shape=n,this._ellipsoid=c.Ellipsoid.clone(d.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,r.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";i=1+i.length*c.Cartesian3.packedLength;i+=1+n.length*c.Cartesian2.packedLength,this.packedLength=i+c.Ellipsoid.packedLength+2}b.pack=function(e,i,n){var t;n=d.defaultValue(n,0);var a=e._positions,o=a.length;for(i[n++]=o,t=0;t<o;++t,n+=c.Cartesian3.packedLength)c.Cartesian3.pack(a[t],i,n);var r=e._shape,o=r.length;for(i[n++]=o,t=0;t<o;++t,n+=c.Cartesian2.packedLength)c.Cartesian2.pack(r[t],i,n);return c.Ellipsoid.pack(e._ellipsoid,i,n),n+=c.Ellipsoid.packedLength,i[n++]=e._cornerType,i[n]=e._granularity,i};var k=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),C={polylinePositions:void 0,shapePositions:void 0,ellipsoid:k,height:void 0,cornerType:void 0,granularity:void 0};b.unpack=function(e,i,n){i=d.defaultValue(i,0);for(var t=e[i++],a=new Array(t),o=0;o<t;++o,i+=c.Cartesian3.packedLength)a[o]=c.Cartesian3.unpack(e,i);var t=e[i++],r=new Array(t);for(o=0;o<t;++o,i+=c.Cartesian2.packedLength)r[o]=c.Cartesian2.unpack(e,i);var l=c.Ellipsoid.unpack(e,i,k);i+=c.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(n)?(n._positions=a,n._shape=r,n._ellipsoid=c.Ellipsoid.clone(l,n._ellipsoid),n._cornerType=s,n._granularity=p,n):(C.polylinePositions=a,C.shapePositions=r,C.cornerType=s,C.granularity=p,new b(C))};var L=new o.BoundingRectangle;return b.createGeometry=function(e){var i=e._positions,n=a.arrayRemoveDuplicates(i,c.Cartesian3.equalsEpsilon),t=e._shape,t=r.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(t);if(!(n.length<2||t.length<3)){l.PolygonPipeline.computeWindingOrder2D(t)===l.WindingOrder.CLOCKWISE&&t.reverse();i=o.BoundingRectangle.fromPoints(t,L);return function(e,i){var n=new g.GeometryAttributes;n.position=new h.GeometryAttribute({componentDatatype:y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var t=i.length,i=n.position.values.length/3,a=e.length/3/t,o=f.IndexDatatype.createTypedArray(i,2*t*(1+a)),r=0,l=0,s=l*t;for(c=0;c<t-1;c++)o[r++]=c+s,o[r++]=c+s+1;for(o[r++]=t-1+s,o[r++]=s,s=(l=a-1)*t,c=0;c<t-1;c++)o[r++]=c+s,o[r++]=c+s+1;for(o[r++]=t-1+s,o[r++]=s,l=0;l<a-1;l++)for(var p=t*l,d=p+t,c=0;c<t;c++)o[r++]=c+p,o[r++]=c+d;return new h.Geometry({attributes:n,indices:f.IndexDatatype.createTypedArray(i,o),boundingSphere:u.BoundingSphere.fromVertices(e),primitiveType:h.PrimitiveType.LINES})}(r.PolylineVolumeGeometryLibrary.computePositions(n,t,i,e,!1),t)}},function(e,i){return(e=d.defined(i)?b.unpack(e,i):e)._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),b.createGeometry(e)}});
