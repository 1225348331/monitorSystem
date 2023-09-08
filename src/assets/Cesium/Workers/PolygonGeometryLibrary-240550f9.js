define(["exports","./ArcType-98ec98bf","./arrayRemoveDuplicates-48046ac4","./Matrix2-fa56e6dd","./ComponentDatatype-bfa70d4a","./when-4bbc8319","./EllipsoidRhumbLine-7ae2cb99","./GeometryAttribute-752789bd","./GeometryAttributes-7827a6c2","./GeometryPipeline-d5fe8ee2","./IndexDatatype-81fb2229","./PolygonPipeline-bca2922a","./Transforms-2711fead"],function(e,P,T,_,I,x,f,E,A,p,G,L,d){"use strict";function M(){this._array=[],this._offset=0,this._length=0}Object.defineProperties(M.prototype,{length:{get:function(){return this._length}}}),M.prototype.enqueue=function(e){this._array.push(e),this._length++},M.prototype.dequeue=function(){if(0!==this._length){var e=this._array,t=this._offset,i=e[t];return e[t]=void 0,10<++t&&2*t>e.length&&(this._array=e.slice(t),t=0),this._offset=t,this._length--,i}},M.prototype.peek=function(){if(0!==this._length)return this._array[this._offset]},M.prototype.contains=function(e){return-1!==this._array.indexOf(e)},M.prototype.clear=function(){this._array.length=this._offset=this._length=0},M.prototype.sort=function(e){0<this._offset&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(e)};var D={computeHierarchyPackedLength:function(e){for(var t=0,i=[e];0<i.length;){var r=i.pop();if(x.defined(r)){t+=2;var n=r.positions,a=r.holes;if(x.defined(n)&&(t+=n.length*_.Cartesian3.packedLength),x.defined(a))for(var o=a.length,s=0;s<o;++s)i.push(a[s])}}return t},packPolygonHierarchy:function(e,t,i){for(var r=[e];0<r.length;){var n=r.pop();if(x.defined(n)){var a=n.positions,o=n.holes;if(t[i++]=x.defined(a)?a.length:0,t[i++]=x.defined(o)?o.length:0,x.defined(a))for(var s=a.length,u=0;u<s;++u,i+=3)_.Cartesian3.pack(a[u],t,i);if(x.defined(o))for(var l=o.length,h=0;h<l;++h)r.push(o[h])}}return i},unpackPolygonHierarchy:function(e,t){for(var i=e[t++],r=e[t++],n=new Array(i),a=0<r?new Array(r):void 0,o=0;o<i;++o,t+=_.Cartesian3.packedLength)n[o]=_.Cartesian3.unpack(e,t);for(var s=0;s<r;++s)a[s]=D.unpackPolygonHierarchy(e,t),t=a[s].startingIndex,delete a[s].startingIndex;return{positions:n,holes:a,startingIndex:t}}},y=new _.Cartesian3;D.subdivideLineCount=function(e,t,i){t=_.Cartesian3.distance(e,t),i=Math.max(0,Math.ceil(I.CesiumMath.log2(t/i)));return Math.pow(2,i)};var g=new _.Cartographic,m=new _.Cartographic,v=new _.Cartographic,C=new _.Cartesian3;D.subdivideRhumbLineCount=function(e,t,i,r){t=e.cartesianToCartographic(t,g),i=e.cartesianToCartographic(i,m),r=new f.EllipsoidRhumbLine(t,i,e).surfaceDistance/r,r=Math.max(0,Math.ceil(I.CesiumMath.log2(r)));return Math.pow(2,r)},D.subdivideLine=function(e,t,i,r){var n=D.subdivideLineCount(e,t,i),a=_.Cartesian3.distance(e,t),o=a/n,s=r=!x.defined(r)?[]:r;s.length=3*n;for(var u,l,h=0,c=0;c<n;c++){var f=(f=e,u=c*o,l=a,_.Cartesian3.subtract(t,f,y),_.Cartesian3.multiplyByScalar(y,u/l,y),_.Cartesian3.add(f,y,y),[y.x,y.y,y.z]);s[h++]=f[0],s[h++]=f[1],s[h++]=f[2]}return s},D.subdivideRhumbLine=function(e,t,i,r,n){var t=e.cartesianToCartographic(t,g),i=e.cartesianToCartographic(i,m),a=new f.EllipsoidRhumbLine(t,i,e),r=a.surfaceDistance/r,r=Math.max(0,Math.ceil(I.CesiumMath.log2(r))),o=Math.pow(2,r),s=a.surfaceDistance/o,u=n=!x.defined(n)?[]:n;u.length=3*o;for(var l=0,h=0;h<o;h++){var c=a.interpolateUsingSurfaceDistance(h*s,v),c=e.cartographicToCartesian(c,C);u[l++]=c.x,u[l++]=c.y,u[l++]=c.z}return u};var b=new _.Cartesian3,w=new _.Cartesian3,S=new _.Cartesian3,R=new _.Cartesian3;D.scaleToGeodeticHeightExtruded=function(e,t,i,r,n){r=x.defaultValue(r,_.Ellipsoid.WGS84);var a=b,o=w,s=S,u=R;if(x.defined(e)&&x.defined(e.attributes)&&x.defined(e.attributes.position))for(var l=e.attributes.position.values,h=l.length/2,c=0;c<h;c+=3)_.Cartesian3.fromArray(l,c,s),r.geodeticSurfaceNormal(s,a),u=r.scaleToGeodeticSurface(s,u),o=_.Cartesian3.multiplyByScalar(a,i,o),o=_.Cartesian3.add(u,o,o),l[c+h]=o.x,l[c+1+h]=o.y,l[c+2+h]=o.z,n&&(u=_.Cartesian3.clone(s,u)),o=_.Cartesian3.multiplyByScalar(a,t,o),o=_.Cartesian3.add(u,o,o),l[c]=o.x,l[c+1]=o.y,l[c+2]=o.z;return e},D.polygonOutlinesFromHierarchy=function(e,t,i){var r,n,a=[],o=new M;for(o.enqueue(e);0!==o.length;){var s=o.dequeue(),u=s.positions;if(t)for(n=u.length,h=0;h<n;h++)i.scaleToGeodeticSurface(u[h],u[h]);if(!((u=T.arrayRemoveDuplicates(u,_.Cartesian3.equalsEpsilon,!0)).length<3)){for(var l=s.holes?s.holes.length:0,h=0;h<l;h++){var c=s.holes[h],f=c.positions;if(t)for(n=f.length,r=0;r<n;++r)i.scaleToGeodeticSurface(f[r],f[r]);if(!((f=T.arrayRemoveDuplicates(f,_.Cartesian3.equalsEpsilon,!0)).length<3)){a.push(f);var p=0;for(x.defined(c.holes)&&(p=c.holes.length),r=0;r<p;r++)o.enqueue(c.holes[r])}}a.push(u)}}return a},D.polygonsFromHierarchy=function(e,t,i,r){var n=[],a=[],o=new M;for(o.enqueue(e);0!==o.length;){var s,u=o.dequeue(),l=u.positions,h=u.holes;if(i)for(s=l.length,m=0;m<s;m++)r.scaleToGeodeticSurface(l[m],l[m]);if(!((l=T.arrayRemoveDuplicates(l,_.Cartesian3.equalsEpsilon,!0)).length<3)){var c=t(l);if(x.defined(c)){var f=[];L.PolygonPipeline.computeWindingOrder2D(c)===L.WindingOrder.CLOCKWISE&&(c.reverse(),l=l.slice().reverse());for(var p,d=l.slice(),y=x.defined(h)?h.length:0,g=[],m=0;m<y;m++){var v=h[m],C=v.positions;if(i)for(s=C.length,p=0;p<s;++p)r.scaleToGeodeticSurface(C[p],C[p]);if(!((C=T.arrayRemoveDuplicates(C,_.Cartesian3.equalsEpsilon,!0)).length<3)){var b=t(C);if(x.defined(b)){L.PolygonPipeline.computeWindingOrder2D(b)===L.WindingOrder.CLOCKWISE&&(b.reverse(),C=C.slice().reverse()),g.push(C),f.push(d.length);var d=d.concat(C),c=c.concat(b),w=0;for(x.defined(v.holes)&&(w=v.holes.length),p=0;p<w;p++)o.enqueue(v.holes[p])}}}n.push({outerRing:l,holes:g}),a.push({positions:d,positions2D:c,holes:f})}}}return{hierarchy:n,polygons:a}};var N=new _.Cartesian2,O=new _.Cartesian3,q=new d.Quaternion,B=new _.Matrix3;D.computeBoundingRectangle=function(e,t,i,r,n){for(var r=d.Quaternion.fromAxisAngle(e,r,q),a=_.Matrix3.fromQuaternion(r,B),o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,h=i.length,c=0;c<h;++c){var f=_.Cartesian3.clone(i[c],O);_.Matrix3.multiplyByVector(a,f,f);f=t(f,N);x.defined(f)&&(o=Math.min(o,f.x),s=Math.max(s,f.x),u=Math.min(u,f.y),l=Math.max(l,f.y))}return n.x=o,n.y=u,n.width=s-o,n.height=l-u,n},D.createGeometryFromPositions=function(e,t,i,r,n,a){var o=L.PolygonPipeline.triangulate(t.positions2D,t.holes,t._multiPoly);t._multiPoly&&o&&o.positions&&(t.positions=o.positions,o=o.indices),o.length<3&&(o=[0,1,2]);var s=t.positions;if(r){for(var u=s.length,l=new Array(3*u),h=0,c=0;c<u;c++){var f=s[c];l[h++]=f.x,l[h++]=f.y,l[h++]=f.z}r=new E.Geometry({attributes:{position:new E.GeometryAttribute({componentDatatype:I.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})},indices:o,primitiveType:E.PrimitiveType.TRIANGLES});return n.normal?p.GeometryPipeline.computeNormal(r):r}return a===P.ArcType.GEODESIC?L.PolygonPipeline.computeSubdivision(e,s,o,i,t._revertPolygon):a===P.ArcType.RHUMB?L.PolygonPipeline.computeRhumbLineSubdivision(e,s,o,i,t._revertPolygon):void 0};var H=[],k=new _.Cartesian3,z=new _.Cartesian3;D.computeWallGeometry=function(e,t,i,r,n){var a,o,s,u=e.length,l=0;if(r)for(o=3*u*2,a=new Array(2*o),s=0;s<u;s++)p=e[s],d=e[(s+1)%u],a[l]=a[l+o]=p.x,a[++l]=a[l+o]=p.y,a[++l]=a[l+o]=p.z,a[++l]=a[l+o]=d.x,a[++l]=a[l+o]=d.y,a[++l]=a[l+o]=d.z,++l;else{var h=I.CesiumMath.chordLength(i,t.maximumRadius),c=0;if(n===P.ArcType.GEODESIC)for(s=0;s<u;s++)c+=D.subdivideLineCount(e[s],e[(s+1)%u],h);else if(n===P.ArcType.RHUMB)for(s=0;s<u;s++)c+=D.subdivideRhumbLineCount(t,e[s],e[(s+1)%u],h);for(o=3*(c+u),a=new Array(2*o),s=0;s<u;s++){var f,p=e[s],d=e[(s+1)%u];n===P.ArcType.GEODESIC?f=D.subdivideLine(p,d,h,H):n===P.ArcType.RHUMB&&(f=D.subdivideRhumbLine(t,p,d,h,H));for(var y=f.length,g=0;g<y;++g,++l)a[l]=f[g],a[l+o]=f[g];a[l]=d.x,a[l+o]=d.x,a[++l]=d.y,a[l+o]=d.y,a[++l]=d.z,a[l+o]=d.z,++l}}var u=a.length,m=G.IndexDatatype.createTypedArray(u/3,u-6*e.length),v=0;for(u/=6,s=0;s<u;s++){var C=s,b=C+1,w=C+u,T=w+1;p=_.Cartesian3.fromArray(a,3*C,k),d=_.Cartesian3.fromArray(a,3*b,z),_.Cartesian3.equalsEpsilon(p,d,I.CesiumMath.EPSILON10,I.CesiumMath.EPSILON10)||(m[v++]=C,m[v++]=w,m[v++]=b,m[v++]=b,m[v++]=w,m[v++]=T)}return new E.Geometry({attributes:new A.GeometryAttributes({position:new E.GeometryAttribute({componentDatatype:I.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a})}),indices:m,primitiveType:E.PrimitiveType.TRIANGLES})},e.PolygonGeometryLibrary=D});
