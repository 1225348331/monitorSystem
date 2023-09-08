define(["./when-4bbc8319","./Transforms-d150322f","./Matrix2-fa56e6dd","./Check-ba987d16","./ComponentDatatype-bfa70d4a","./GeometryAttribute-e8a7fd74","./GeometryAttributes-7827a6c2","./VertexFormat-33d5a7e0","./combine-83860057","./RuntimeError-55ee6bc3","./WebGLConstants-1c8239cc"],function(n,o,m,e,i,u,p,a,t,r,c){"use strict";function y(e){e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT);e=n.defaultValue(e.vertexFormat,a.VertexFormat.DEFAULT);this._vertexFormat=e,this._workerName="createPlaneGeometry"}y.packedLength=a.VertexFormat.packedLength,y.pack=function(e,t,r){return r=n.defaultValue(r,0),a.VertexFormat.pack(e._vertexFormat,t,r),t};var s=new a.VertexFormat,A={vertexFormat:s};y.unpack=function(e,t,r){t=n.defaultValue(t,0);t=a.VertexFormat.unpack(e,t,s);return n.defined(r)?(r._vertexFormat=a.VertexFormat.clone(t,r._vertexFormat),r):new y(A)};var b=new m.Cartesian3(-.5,-.5,0),l=new m.Cartesian3(.5,.5,0);return y.createGeometry=function(e){var t,r,n=e._vertexFormat,a=new p.GeometryAttributes;return n.position&&((e=new Float64Array(12))[0]=b.x,e[1]=b.y,e[2]=0,e[3]=l.x,e[4]=b.y,e[5]=0,e[6]=l.x,e[7]=l.y,e[8]=0,e[9]=b.x,e[10]=l.y,e[11]=0,a.position=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}),n.normal&&((e=new Float32Array(12))[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=1,e[9]=0,e[10]=0,e[11]=1,a.normal=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})),n.st&&((t=new Float32Array(8))[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,a.st=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})),n.tangent&&((t=new Float32Array(12))[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,a.tangent=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})),n.bitangent&&((r=new Float32Array(12))[0]=0,r[1]=1,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=1,r[8]=0,r[9]=0,r[10]=1,r[11]=0,a.bitangent=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:r})),(r=new Uint16Array(6))[0]=0,r[1]=1,r[2]=2,r[3]=0,r[4]=2,r[5]=3),new u.Geometry({attributes:a,indices:r,primitiveType:u.PrimitiveType.TRIANGLES,boundingSphere:new o.BoundingSphere(m.Cartesian3.ZERO,Math.sqrt(2))})},function(e,t){return n.defined(t)&&(e=y.unpack(e,t)),y.createGeometry(e)}});
