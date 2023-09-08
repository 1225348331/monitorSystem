define(["exports","./Transforms-d150322f","./Matrix2-fa56e6dd","./Check-ba987d16","./when-4bbc8319","./EllipsoidTangentPlane-fb029ce5","./ComponentDatatype-bfa70d4a","./Plane-034a4517"],function(a,l,b,t,O,w,y,N){"use strict";function P(a,t){this.center=b.Cartesian3.clone(O.defaultValue(a,b.Cartesian3.ZERO)),this.halfAxes=b.Matrix3.clone(O.defaultValue(t,b.Matrix3.ZERO))}P.packedLength=b.Cartesian3.packedLength+b.Matrix3.packedLength,P.pack=function(a,t,e){return e=O.defaultValue(e,0),b.Cartesian3.pack(a.center,t,e),b.Matrix3.pack(a.halfAxes,t,e+b.Cartesian3.packedLength),t},P.unpack=function(a,t,e){return t=O.defaultValue(t,0),O.defined(e)||(e=new P),b.Cartesian3.unpack(a,t,e.center),b.Matrix3.unpack(a,t+b.Cartesian3.packedLength,e.halfAxes),e};var T=new b.Cartesian3,A=new b.Cartesian3,I=new b.Cartesian3,R=new b.Cartesian3,E=new b.Cartesian3,S=new b.Cartesian3,U=new b.Matrix3,L={unitary:new b.Matrix3,diagonal:new b.Matrix3};P.fromPoints=function(a,t){if(O.defined(t)||(t=new P),!O.defined(a)||0===a.length)return t.halfAxes=b.Matrix3.ZERO,t.center=b.Cartesian3.ZERO,t;for(var e=a.length,n=b.Cartesian3.clone(a[0],T),r=1;r<e;r++)b.Cartesian3.add(n,a[r],n);var i=1/e;b.Cartesian3.multiplyByScalar(n,i,n);var s,o=0,C=0,c=0,u=0,d=0,l=0;for(r=0;r<e;r++)o+=(s=b.Cartesian3.subtract(a[r],n,A)).x*s.x,C+=s.x*s.y,c+=s.x*s.z,u+=s.y*s.y,d+=s.y*s.z,l+=s.z*s.z;C*=i,c*=i,u*=i,d*=i,l*=i;var h=U;h[0]=o*=i,h[1]=C,h[2]=c,h[3]=C,h[4]=u,h[5]=d,h[6]=c,h[7]=d,h[8]=l;var h=b.Matrix3.computeEigenDecomposition(h,L),h=b.Matrix3.clone(h.unitary,t.halfAxes),x=b.Matrix3.getColumn(h,0,R),M=b.Matrix3.getColumn(h,1,E),m=b.Matrix3.getColumn(h,2,S),f=-Number.MAX_VALUE,p=-Number.MAX_VALUE,g=-Number.MAX_VALUE,w=Number.MAX_VALUE,y=Number.MAX_VALUE,N=Number.MAX_VALUE;for(r=0;r<e;r++)s=a[r],f=Math.max(b.Cartesian3.dot(x,s),f),p=Math.max(b.Cartesian3.dot(M,s),p),g=Math.max(b.Cartesian3.dot(m,s),g),w=Math.min(b.Cartesian3.dot(x,s),w),y=Math.min(b.Cartesian3.dot(M,s),y),N=Math.min(b.Cartesian3.dot(m,s),N);x=b.Cartesian3.multiplyByScalar(x,.5*(w+f),x),M=b.Cartesian3.multiplyByScalar(M,.5*(y+p),M),m=b.Cartesian3.multiplyByScalar(m,.5*(N+g),m),h=b.Cartesian3.add(x,M,t.center);b.Cartesian3.add(h,m,h);h=I;return h.x=f-w,h.y=p-y,h.z=g-N,b.Cartesian3.multiplyByScalar(h,.5,h),b.Matrix3.multiplyByScale(t.halfAxes,h,t.halfAxes),t};var M=new b.Cartesian3,h=new b.Cartesian3;function v(a,t,e,n,r,i,s,o,C,c,u){var d=(u=!O.defined(u)?new P:u).halfAxes;b.Matrix3.setColumn(d,0,t,d),b.Matrix3.setColumn(d,1,e,d),b.Matrix3.setColumn(d,2,n,d),(e=M).x=(r+i)/2,e.y=(s+o)/2,e.z=(C+c)/2;n=h;n.x=(i-r)/2,n.y=(o-s)/2,n.z=(c-C)/2;C=u.center,e=b.Matrix3.multiplyByVector(d,e,e);return b.Cartesian3.add(a,e,C),b.Matrix3.multiplyByScale(d,n,d),u}var z=new b.Cartographic,B=new b.Cartesian3,V=new b.Cartographic,_=new b.Cartographic,k=new b.Cartographic,W=new b.Cartographic,D=new b.Cartographic,X=new b.Cartesian3,q=new b.Cartesian3,j=new b.Cartesian3,Z=new b.Cartesian3,Y=new b.Cartesian3,G=new b.Cartesian2,F=new b.Cartesian2,H=new b.Cartesian2,J=new b.Cartesian2,K=new b.Cartesian2,Q=new b.Cartesian3,$=new b.Cartesian3,aa=new b.Cartesian3,ta=new b.Cartesian3,ea=new b.Cartesian2,na=new b.Cartesian3,ra=new b.Cartesian3,ia=new b.Cartesian3,sa=new N.Plane(b.Cartesian3.UNIT_X,0);P.fromRectangle=function(a,t,e,n,r){if(t=O.defaultValue(t,0),e=O.defaultValue(e,0),n=O.defaultValue(n,b.Ellipsoid.WGS84),a.width<=y.CesiumMath.PI){var i=b.Rectangle.center(a,z),s=n.cartographicToCartesian(i,B),o=new w.EllipsoidTangentPlane(s,n),C=o.plane,c=i.longitude,u=a.south<0&&0<a.north?0:i.latitude,d=b.Cartographic.fromRadians(c,a.north,e,V),l=b.Cartographic.fromRadians(a.west,a.north,e,_),h=b.Cartographic.fromRadians(a.west,u,e,k),x=b.Cartographic.fromRadians(a.west,a.south,e,W),M=b.Cartographic.fromRadians(c,a.south,e,D),m=n.cartographicToCartesian(d,X),f=n.cartographicToCartesian(l,q),p=n.cartographicToCartesian(h,j),g=n.cartographicToCartesian(x,Z),s=n.cartographicToCartesian(M,Y),i=o.projectPointToNearestOnPlane(m,G),u=o.projectPointToNearestOnPlane(f,F),c=o.projectPointToNearestOnPlane(p,H),d=o.projectPointToNearestOnPlane(g,J),h=o.projectPointToNearestOnPlane(s,K),m=-(M=Math.min(u.x,c.x,d.x)),p=Math.max(u.y,i.y),s=Math.min(d.y,h.y);return l.height=x.height=t,f=n.cartographicToCartesian(l,q),g=n.cartographicToCartesian(x,Z),c=Math.min(N.Plane.getPointDistance(C,f),N.Plane.getPointDistance(C,g)),u=e,v(o.origin,o.xAxis,o.yAxis,o.zAxis,M,m,s,p,c,u,r)}i=0<a.south,d=a.north<0,h=i?a.south:d?a.north:0,l=b.Rectangle.center(a,z).longitude,x=b.Cartesian3.fromRadians(l,h,e,n,Q);x.z=0;f=Math.abs(x.x)<y.CesiumMath.EPSILON10&&Math.abs(x.y)<y.CesiumMath.EPSILON10?b.Cartesian3.UNIT_X:b.Cartesian3.normalize(x,$),g=b.Cartesian3.UNIT_Z,o=b.Cartesian3.cross(f,g,aa);C=N.Plane.fromPointNormal(x,f,sa);l=b.Cartesian3.fromRadians(l+y.CesiumMath.PI_OVER_TWO,h,e,n,ta);M=-(m=b.Cartesian3.dot(N.Plane.projectPointOntoPlane(C,l,ea),o)),p=b.Cartesian3.fromRadians(0,a.north,d?t:e,n,na).z,s=b.Cartesian3.fromRadians(0,a.south,i?t:e,n,ra).z;n=b.Cartesian3.fromRadians(a.east,h,e,n,ia);return v(x,o,g,f,M,m,s,p,c=N.Plane.getPointDistance(C,n),u=0,r)},P.clone=function(a,t){if(O.defined(a))return O.defined(t)?(b.Cartesian3.clone(a.center,t.center),b.Matrix3.clone(a.halfAxes,t.halfAxes),t):new P(a.center,a.halfAxes)},P.intersectPlane=function(a,t){var e=a.center,n=t.normal,r=a.halfAxes,i=n.x,s=n.y,a=n.z,r=Math.abs(i*r[b.Matrix3.COLUMN0ROW0]+s*r[b.Matrix3.COLUMN0ROW1]+a*r[b.Matrix3.COLUMN0ROW2])+Math.abs(i*r[b.Matrix3.COLUMN1ROW0]+s*r[b.Matrix3.COLUMN1ROW1]+a*r[b.Matrix3.COLUMN1ROW2])+Math.abs(i*r[b.Matrix3.COLUMN2ROW0]+s*r[b.Matrix3.COLUMN2ROW1]+a*r[b.Matrix3.COLUMN2ROW2]),t=b.Cartesian3.dot(n,e)+t.distance;return t<=-r?l.Intersect.OUTSIDE:r<=t?l.Intersect.INSIDE:l.Intersect.INTERSECTING};var m=new b.Cartesian3,f=new b.Cartesian3,p=new b.Cartesian3,g=new b.Cartesian3,oa=new b.Cartesian3,Ca=new b.Cartesian3;P.distanceSquaredTo=function(a,t){var e=b.Cartesian3.subtract(t,a.center,M),n=a.halfAxes,r=b.Matrix3.getColumn(n,0,m),i=b.Matrix3.getColumn(n,1,f),s=b.Matrix3.getColumn(n,2,p),o=b.Cartesian3.magnitude(r),C=b.Cartesian3.magnitude(i),c=b.Cartesian3.magnitude(s),u=!0,t=!0,a=!0;0<o?b.Cartesian3.divideByScalar(r,o,r):u=!1,0<C?b.Cartesian3.divideByScalar(i,C,i):t=!1,0<c?b.Cartesian3.divideByScalar(s,c,s):a=!1;var d,l,h,n=!u+!t+!a;1==n?(u=r,l=i,h=s,t?a||(u=s,h=r):(u=i,l=r),d=b.Cartesian3.cross(l,h,oa),u===r?r=d:u===i?i=d:u===s&&(s=d)):2==n?(l=r,t?l=i:a&&(l=s),(a=b.Cartesian3.UNIT_Y).equalsEpsilon(l,y.CesiumMath.EPSILON3)&&(a=b.Cartesian3.UNIT_X),h=b.Cartesian3.cross(l,a,g),b.Cartesian3.normalize(h,h),d=b.Cartesian3.cross(l,h,oa),b.Cartesian3.normalize(d,d),l===r?(i=h,s=d):l===i?(s=h,r=d):l===s&&(r=h,i=d)):3==n&&(r=b.Cartesian3.UNIT_X,i=b.Cartesian3.UNIT_Y,s=b.Cartesian3.UNIT_Z);n=Ca;n.x=b.Cartesian3.dot(e,r),n.y=b.Cartesian3.dot(e,i),n.z=b.Cartesian3.dot(e,s);var x,s=0;return n.x<-o?s+=(x=n.x+o)*x:n.x>o&&(s+=(x=n.x-o)*x),n.y<-C?s+=(x=n.y+C)*x:n.y>C&&(s+=(x=n.y-C)*x),n.z<-c?s+=(x=n.z+c)*x:n.z>c&&(s+=(x=n.z-c)*x),s};var x=new b.Cartesian3,ca=new b.Cartesian3;P.computePlaneDistances=function(a,t,e,n){O.defined(n)||(n=new l.Interval);var r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=a.center,o=a.halfAxes,C=b.Matrix3.getColumn(o,0,m),c=b.Matrix3.getColumn(o,1,f),u=b.Matrix3.getColumn(o,2,p),d=b.Cartesian3.add(C,c,x);b.Cartesian3.add(d,u,d),b.Cartesian3.add(d,s,d);a=b.Cartesian3.subtract(d,t,ca),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i);return b.Cartesian3.add(s,C,d),b.Cartesian3.add(d,c,d),b.Cartesian3.subtract(d,u,d),b.Cartesian3.subtract(d,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.add(s,C,d),b.Cartesian3.subtract(d,c,d),b.Cartesian3.add(d,u,d),b.Cartesian3.subtract(d,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.add(s,C,d),b.Cartesian3.subtract(d,c,d),b.Cartesian3.subtract(d,u,d),b.Cartesian3.subtract(d,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.subtract(s,C,d),b.Cartesian3.add(d,c,d),b.Cartesian3.add(d,u,d),b.Cartesian3.subtract(d,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.subtract(s,C,d),b.Cartesian3.add(d,c,d),b.Cartesian3.subtract(d,u,d),b.Cartesian3.subtract(d,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.subtract(s,C,d),b.Cartesian3.subtract(d,c,d),b.Cartesian3.add(d,u,d),b.Cartesian3.subtract(d,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),b.Cartesian3.subtract(s,C,d),b.Cartesian3.subtract(d,c,d),b.Cartesian3.subtract(d,u,d),b.Cartesian3.subtract(d,t,a),o=b.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),n.start=r,n.stop=i,n};var e=new l.BoundingSphere;P.isOccluded=function(a,t){a=l.BoundingSphere.fromOrientedBoundingBox(a,e);return!t.isBoundingSphereVisible(a)},P.prototype.intersectPlane=function(a){return P.intersectPlane(this,a)},P.prototype.distanceSquaredTo=function(a){return P.distanceSquaredTo(this,a)},P.prototype.computePlaneDistances=function(a,t,e){return P.computePlaneDistances(this,a,t,e)},P.prototype.isOccluded=function(a){return P.isOccluded(this,a)},P.equals=function(a,t){return a===t||O.defined(a)&&O.defined(t)&&b.Cartesian3.equals(a.center,t.center)&&b.Matrix3.equals(a.halfAxes,t.halfAxes)},P.prototype.clone=function(a){return P.clone(this,a)},P.prototype.equals=function(a){return P.equals(this,a)},a.OrientedBoundingBox=P});
