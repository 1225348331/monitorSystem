define(["exports","./GeometryOffsetAttribute-58373def","./Transforms-d150322f","./Matrix2-fa56e6dd","./ComponentDatatype-bfa70d4a","./CylinderGeometryLibrary-028540ec","./when-4bbc8319","./Check-ba987d16","./GeometryAttribute-e8a7fd74","./GeometryAttributes-7827a6c2","./IndexDatatype-81fb2229","./VertexFormat-33d5a7e0"],function(t,P,k,M,z,E,N,e,I,U,S,m){"use strict";var B=new M.Cartesian2,Y=new M.Cartesian3,Z=new M.Cartesian3,J=new M.Cartesian3,W=new M.Cartesian3;function u(t){var e=(t=N.defaultValue(t,N.defaultValue.EMPTY_OBJECT)).length,a=t.topRadius,r=t.bottomRadius,n=N.defaultValue(t.vertexFormat,m.VertexFormat.DEFAULT),o=N.defaultValue(t.slices,128);this._length=e,this._topRadius=a,this._bottomRadius=r,this._vertexFormat=m.VertexFormat.clone(n),this._slices=o,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}u.packedLength=m.VertexFormat.packedLength+5,u.pack=function(t,e,a){return a=N.defaultValue(a,0),m.VertexFormat.pack(t._vertexFormat,e,a),a+=m.VertexFormat.packedLength,e[a++]=t._length,e[a++]=t._topRadius,e[a++]=t._bottomRadius,e[a++]=t._slices,e[a]=N.defaultValue(t._offsetAttribute,-1),e};var a,d=new m.VertexFormat,p={vertexFormat:d,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};u.unpack=function(t,e,a){e=N.defaultValue(e,0);var r=m.VertexFormat.unpack(t,e,d);e+=m.VertexFormat.packedLength;var n=t[e++],o=t[e++],i=t[e++],s=t[e++],e=t[e];return N.defined(a)?(a._vertexFormat=m.VertexFormat.clone(r,a._vertexFormat),a._length=n,a._topRadius=o,a._bottomRadius=i,a._slices=s,a._offsetAttribute=-1===e?void 0:e,a):(p.length=n,p.topRadius=o,p.bottomRadius=i,p.slices=s,p.offsetAttribute=-1===e?void 0:e,new u(p))},u.createGeometry=function(t){var e=t._length,a=t._topRadius,r=t._bottomRadius,n=t._vertexFormat,o=t._slices;if(!(e<=0||a<0||r<0||0===a&&0===r)){var i=o+o,s=o+i,m=i+i,u=E.CylinderGeometryLibrary.computePositions(e,a,r,o,!0),d=n.st?new Float32Array(2*m):void 0,p=n.normal?new Float32Array(3*m):void 0,f=n.tangent?new Float32Array(3*m):void 0,y=n.bitangent?new Float32Array(3*m):void 0,l=n.normal||n.tangent||n.bitangent;if(l){var b=n.tangent||n.bitangent,c=0,v=0,A=0,x=Math.atan2(r-a,e),g=Y;g.z=Math.sin(x);for(var _=Math.cos(x),h=J,F=Z,C=0;C<o;C++){var w=C/o*z.CesiumMath.TWO_PI,G=_*Math.cos(w),w=_*Math.sin(w);l&&(g.x=G,g.y=w,b&&(h=M.Cartesian3.normalize(M.Cartesian3.cross(M.Cartesian3.UNIT_Z,g,h),h)),n.normal&&(p[c++]=g.x,p[c++]=g.y,p[c++]=g.z,p[c++]=g.x,p[c++]=g.y,p[c++]=g.z),n.tangent&&(f[v++]=h.x,f[v++]=h.y,f[v++]=h.z,f[v++]=h.x,f[v++]=h.y,f[v++]=h.z),n.bitangent&&(F=M.Cartesian3.normalize(M.Cartesian3.cross(g,h,F),F),y[A++]=F.x,y[A++]=F.y,y[A++]=F.z,y[A++]=F.x,y[A++]=F.y,y[A++]=F.z))}for(C=0;C<o;C++)n.normal&&(p[c++]=0,p[c++]=0,p[c++]=-1),n.tangent&&(f[v++]=1,f[v++]=0,f[v++]=0),n.bitangent&&(y[A++]=0,y[A++]=-1,y[A++]=0);for(C=0;C<o;C++)n.normal&&(p[c++]=0,p[c++]=0,p[c++]=1),n.tangent&&(f[v++]=1,f[v++]=0,f[v++]=0),n.bitangent&&(y[A++]=0,y[A++]=1,y[A++]=0)}var D=S.IndexDatatype.createTypedArray(m,12*o-12),R=0,V=0;for(C=0;C<o-1;C++)D[R++]=V,D[R++]=V+2,D[R++]=V+3,D[R++]=V,D[R++]=V+3,D[R++]=V+1,V+=2;for(D[R++]=i-2,D[R++]=0,D[R++]=1,D[R++]=i-2,D[R++]=1,D[R++]=i-1,C=1;C<o-1;C++)D[R++]=i+C+1,D[R++]=i+C,D[R++]=i;for(C=1;C<o-1;C++)D[R++]=s,D[R++]=s+C,D[R++]=s+C+1;var T=0;if(n.st){var O=Math.max(a,r);for(C=0;C<m;C++){var L=M.Cartesian3.fromArray(u,3*C,W);d[T++]=(L.x+O)/(2*O),d[T++]=(L.y+O)/(2*O)}}x=new U.GeometryAttributes;n.position&&(x.position=new I.GeometryAttribute({componentDatatype:z.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})),n.normal&&(x.normal=new I.GeometryAttribute({componentDatatype:z.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),n.tangent&&(x.tangent=new I.GeometryAttribute({componentDatatype:z.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})),n.bitangent&&(x.bitangent=new I.GeometryAttribute({componentDatatype:z.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),n.st&&(x.st=new I.GeometryAttribute({componentDatatype:z.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})),B.x=.5*e,B.y=Math.max(r,a);r=new k.BoundingSphere(M.Cartesian3.ZERO,M.Cartesian2.magnitude(B));return N.defined(t._offsetAttribute)&&(e=u.length,a=new Uint8Array(e/3),e=t._offsetAttribute===P.GeometryOffsetAttribute.NONE?0:1,P.arrayFill(a,e),x.applyOffset=new I.GeometryAttribute({componentDatatype:z.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})),new I.Geometry({attributes:x,indices:D,primitiveType:I.PrimitiveType.TRIANGLES,boundingSphere:r,offsetAttribute:t._offsetAttribute})}},u.getUnitCylinder=function(){return a=!N.defined(a)?u.createGeometry(new u({topRadius:1,bottomRadius:1,length:1,vertexFormat:m.VertexFormat.POSITION_ONLY})):a},t.CylinderGeometry=u});
