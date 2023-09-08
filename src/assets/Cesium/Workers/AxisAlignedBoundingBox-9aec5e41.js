define(["exports","./Matrix2-fa56e6dd","./Check-ba987d16","./when-4bbc8319","./Transforms-d150322f"],function(e,C,n,h,a){"use strict";function y(e,n,i){this.minimum=C.Cartesian3.clone(h.defaultValue(e,C.Cartesian3.ZERO)),this.maximum=C.Cartesian3.clone(h.defaultValue(n,C.Cartesian3.ZERO)),i=h.defined(i)?C.Cartesian3.clone(i):C.Cartesian3.midpoint(this.minimum,this.maximum,new C.Cartesian3),this.center=i}y.fromPoints=function(e,n){if(h.defined(n)||(n=new y),!h.defined(e)||0===e.length)return n.minimum=C.Cartesian3.clone(C.Cartesian3.ZERO,n.minimum),n.maximum=C.Cartesian3.clone(C.Cartesian3.ZERO,n.maximum),n.center=C.Cartesian3.clone(C.Cartesian3.ZERO,n.center),n;for(var i=e[0].x,t=e[0].y,a=e[0].z,m=e[0].x,r=e[0].y,s=e[0].z,u=e.length,c=1;c<u;c++)var o=e[c],l=o.x,d=o.y,o=o.z,i=Math.min(l,i),m=Math.max(l,m),t=Math.min(d,t),r=Math.max(d,r),a=Math.min(o,a),s=Math.max(o,s);var f=n.minimum;f.x=i,f.y=t,f.z=a;var x=n.maximum;return x.x=m,x.y=r,x.z=s,n.center=C.Cartesian3.midpoint(f,x,n.center),n},y.clone=function(e,n){if(h.defined(e))return h.defined(n)?(n.minimum=C.Cartesian3.clone(e.minimum,n.minimum),n.maximum=C.Cartesian3.clone(e.maximum,n.maximum),n.center=C.Cartesian3.clone(e.center,n.center),n):new y(e.minimum,e.maximum,e.center)},y.equals=function(e,n){return e===n||h.defined(e)&&h.defined(n)&&C.Cartesian3.equals(e.center,n.center)&&C.Cartesian3.equals(e.minimum,n.minimum)&&C.Cartesian3.equals(e.maximum,n.maximum)};var m=new C.Cartesian3;y.intersectPlane=function(e,n){m=C.Cartesian3.subtract(e.maximum,e.minimum,m);var i=C.Cartesian3.multiplyByScalar(m,.5,m),t=n.normal,i=i.x*Math.abs(t.x)+i.y*Math.abs(t.y)+i.z*Math.abs(t.z),n=C.Cartesian3.dot(e.center,t)+n.distance;return 0<n-i?a.Intersect.INSIDE:n+i<0?a.Intersect.OUTSIDE:a.Intersect.INTERSECTING},y.prototype.clone=function(e){return y.clone(this,e)},y.prototype.intersectPlane=function(e){return y.intersectPlane(this,e)},y.prototype.equals=function(e){return y.equals(this,e)},e.AxisAlignedBoundingBox=y});
