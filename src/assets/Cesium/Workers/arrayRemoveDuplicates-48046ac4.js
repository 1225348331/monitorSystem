define(["exports","./Check-ba987d16","./when-4bbc8319","./ComponentDatatype-bfa70d4a"],function(e,n,l,d){"use strict";var p=d.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,d,i){if(l.defined(e)){d=l.defaultValue(d,!1);var t=l.defined(i),f=e.length;if(f<2)return e;for(var a,r,u=e[0],s=0,c=-1,h=1;h<f;++h)n(u,a=e[h],p)?(l.defined(r)||(r=e.slice(0,h),s=h-1,c=0),t&&i.push(h)):(l.defined(r)&&(r.push(a),s=h,t&&(c=i.length)),u=a);return d&&n(e[0],e[f-1],p)&&(t&&(l.defined(r)?i.splice(c,0,s):i.push(f-1)),l.defined(r)?--r.length:r=e.slice(0,-1)),l.defined(r)?r:e}}});
