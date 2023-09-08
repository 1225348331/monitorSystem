define(["./AttributeCompression-943b6739","./Matrix2-fa56e6dd","./ComponentDatatype-bfa70d4a","./createTaskProcessorWorker","./Check-ba987d16","./when-4bbc8319","./RuntimeError-55ee6bc3","./WebGLConstants-1c8239cc"],function(d,C,g,a,e,r,t,n){"use strict";var w=32767,k=new C.Cartographic,v=new C.Cartesian3,y=new C.Rectangle,A=new C.Ellipsoid,R={min:void 0,max:void 0};return a(function(a,e){var r=new Uint16Array(a.positions);!function(a){a=new Float64Array(a);var e=0;R.min=a[e++],R.max=a[e++],C.Rectangle.unpack(a,2,y),e+=C.Rectangle.packedLength,C.Ellipsoid.unpack(a,e,A)}(a.packedBuffer);var t=y,n=A,i=R.min,o=R.max,s=r.length/3,c=r.subarray(0,s),u=r.subarray(s,2*s),p=r.subarray(2*s,3*s);d.AttributeCompression.zigZagDeltaDecode(c,u,p);for(var l=new Float64Array(r.length),b=0;b<s;++b){var f=c[b],h=u[b],m=p[b],f=g.CesiumMath.lerp(t.west,t.east,f/w),h=g.CesiumMath.lerp(t.south,t.north,h/w),m=g.CesiumMath.lerp(i,o,m/w),m=C.Cartographic.fromRadians(f,h,m,k),m=n.cartographicToCartesian(m,v);C.Cartesian3.pack(m,l,3*b)}return e.push(l.buffer),{positions:l.buffer}})});
