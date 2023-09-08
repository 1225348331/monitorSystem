define(["exports","./Matrix2-fa56e6dd","./when-4bbc8319","./Check-ba987d16","./Transforms-2711fead","./ComponentDatatype-bfa70d4a"],function(t,X,S,n,a,Y){"use strict";var w=Math.cos,M=Math.sin,m=Math.sqrt,r={computePosition:function(t,n,a,r,e,o,s){var i=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,u=g.latitude-t.granYCos*r+e*t.granXSin,c=w(u),C=M(u),l=i.z*C,d=g.longitude+r*t.granYSin+e*t.granXCos,n=c*w(d),g=c*M(d),c=i.x*n,i=i.y*g,C=m(c*n+i*g+l*C);o.x=c/C,o.y=i/C,o.z=l/C,a&&(a=t.stNwCorner,S.defined(a)?(u=a.latitude-t.stGranYCos*r+e*t.stGranXSin,d=a.longitude+r*t.stGranYSin+e*t.stGranXCos,s.x=(d-t.stWest)*t.lonScalar,s.y=(u-t.stSouth)*t.latScalar):(s.x=(d-h.west)*t.lonScalar,s.y=(u-h.south)*t.latScalar))}},l=new X.Matrix2,d=new X.Cartesian3,p=new X.Cartographic,f=new X.Cartesian3,x=new a.GeographicProjection;function G(t,n,a,r,e,o,s){var i=Math.cos(n),g=r*i,h=a*i,u=Math.sin(n),c=r*u,C=a*u;d=x.project(t,d),d=X.Cartesian3.subtract(d,f,d);i=X.Matrix2.fromRotation(n,l);d=X.Matrix2.multiplyByVector(i,d,d),d=X.Cartesian3.add(d,f,d);r=(t=x.unproject(d,t)).latitude,a=r+--o*C,u=r-g*--s,n=r-g*s+o*C,i=Math.max(r,a,u,n),r=Math.min(r,a,u,n),a=t.longitude,u=a+o*h,n=a+s*c,o=a+s*c+o*h;return{north:i,south:r,east:Math.max(a,u,n,o),west:Math.min(a,u,n,o),granYCos:g,granYSin:c,granXCos:h,granXSin:C,nwCorner:t}}r.computeOptions=function(t,n,a,r,e,o,s){var i=t.east,g=t.west,h=t.north,u=t.south,c=!1,C=!1;h===Y.CesiumMath.PI_OVER_TWO&&(c=!0),u===-Y.CesiumMath.PI_OVER_TWO&&(C=!0);var l,d=h-u,S=(w=i<g?Y.CesiumMath.TWO_PI-g+i:i-g)/((l=Math.ceil(w/n)+1)-1),w=d/((M=Math.ceil(d/n)+1)-1),d=X.Rectangle.northwest(t,o),n=X.Rectangle.center(t,p);0===a&&0===r||(n.longitude<d.longitude&&(n.longitude+=Y.CesiumMath.TWO_PI),f=x.project(n,f));var M,o=w,n=S,e=X.Rectangle.clone(t,e),C={granYCos:o,granYSin:0,granXCos:n,granXSin:0,nwCorner:d,boundingRectangle:e,width:l,height:M,northCap:c,southCap:C};return 0!==a&&(h=(d=G(d,a,S,w,0,l,M)).north,u=d.south,i=d.east,g=d.west,C.granYCos=d.granYCos,C.granYSin=d.granYSin,C.granXCos=d.granXCos,C.granXSin=d.granXSin,e.north=h,e.south=u,e.east=i,e.west=g),0!==r&&(a-=r,M=G(s=X.Rectangle.northwest(e,s),a,S,w,0,l,M),C.stGranYCos=M.granYCos,C.stGranXCos=M.granXCos,C.stGranYSin=M.granYSin,C.stGranXSin=M.granXSin,C.stNwCorner=s,C.stWest=M.west,C.stSouth=M.south),C},t.RectangleGeometryLibrary=r});