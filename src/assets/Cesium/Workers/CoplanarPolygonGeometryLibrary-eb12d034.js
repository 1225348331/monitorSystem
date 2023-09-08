define(["exports","./Matrix2-fa56e6dd","./Check-ba987d16","./OrientedBoundingBox-d932d19f"],function(n,g,t,l){"use strict";var e={},i=new g.Cartesian3,f=new g.Cartesian3,x=new g.Cartesian3,B=new g.Cartesian3,M=new l.OrientedBoundingBox;function o(n,t,e,r,a){t=g.Cartesian3.subtract(n,t,i),e=g.Cartesian3.dot(e,t),t=g.Cartesian3.dot(r,t);return g.Cartesian2.fromElements(e,t,a)}e.validOutline=function(n){var t=l.OrientedBoundingBox.fromPoints(n,M).halfAxes,e=g.Matrix3.getColumn(t,0,f),n=g.Matrix3.getColumn(t,1,x),t=g.Matrix3.getColumn(t,2,B),e=g.Cartesian3.magnitude(e),n=g.Cartesian3.magnitude(n),t=g.Cartesian3.magnitude(t);return!(0===e&&(0===n||0===t)||0===n&&0===t)},e.computeProjectTo2DArguments=function(n,t,e,r){var a,i,o=l.OrientedBoundingBox.fromPoints(n,M),u=o.halfAxes,s=g.Matrix3.getColumn(u,0,f),C=g.Matrix3.getColumn(u,1,x),d=g.Matrix3.getColumn(u,2,B),m=g.Cartesian3.magnitude(s),c=g.Cartesian3.magnitude(C),n=g.Cartesian3.magnitude(d),u=Math.min(m,c,n);return(0!==m||0!==c&&0!==n)&&(0!==c||0!==n)&&(u!==c&&u!==n||(a=s),u===m?a=C:u===n&&(i=C),u!==m&&u!==c||(i=d),g.Cartesian3.normalize(a,e),g.Cartesian3.normalize(i,r),g.Cartesian3.clone(o.center,t),!0)},e.createProjectPointsTo2DFunction=function(r,a,i){return function(n){for(var t=new Array(n.length),e=0;e<n.length;e++)t[e]=o(n[e],r,a,i);return t}},e.createProjectPointTo2DFunction=function(e,r,a){return function(n,t){return o(n,e,r,a,t)}},n.CoplanarPolygonGeometryLibrary=e});
