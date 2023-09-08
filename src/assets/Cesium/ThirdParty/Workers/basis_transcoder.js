var BASIS=function(){var xt="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(xt=xt||__filename),function(e){var r,i,a=void 0!==(e=e||{})?e:{};a.ready=new Promise(function(e,t){r=e,readyPromiseRejectza=t});var t,n={};for(t in a)a.hasOwnProperty(t)&&(n[t]=a[t]);var o,u,s,c,f,l=!1,p=!1,l="object"==typeof window,p="function"==typeof importScripts,d="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,h=!l&&!d&&!p,y="";d?(y=p?require("path").dirname(y)+"/":__dirname+"/",o=function(e,t){return c=c||require("fs"),e=(f=f||require("path")).normalize(e),c.readFileSync(e,t?null:"utf8")},s=function(e){e=o(e,!0);return T((e=!e.buffer?new Uint8Array(e):e).buffer),e},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof function(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}))throw e}),process.on("unhandledRejection",Z),a.inspect=function(){return"[Emscripten Module object]"}):h?("undefined"!=typeof read&&(o=function(e){return read(e)}),s=function(e){return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(T("object"==typeof(e=read(e,"binary"))),e)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(l||p)&&(p?y=self.location.href:"undefined"!=typeof document&&document.currentScript&&(y=document.currentScript.src),y=0!==(y=xt?xt:y).indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",o=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},p&&(s=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),u=function(e,t,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){200==n.status||0==n.status&&n.response?t(n.response):r()},n.onerror=r,n.send(null)});var v=a.print||console.log.bind(console),m=a.printErr||console.warn.bind(console);for(t in n)n.hasOwnProperty(t)&&(a[t]=n[t]);n=null,a.arguments&&a.arguments,a.thisProgram&&a.thisProgram,a.quit&&a.quit;var g;a.wasmBinary&&(g=a.wasmBinary);var w;a.noExitRuntime;"object"!=typeof WebAssembly&&Z("no native wasm support detected");var b=!1;function T(e,t){e||Z("Assertion failed: "+t)}var C="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function $(e,t,r){for(var n=t+r,o=t;e[o]&&!(n<=o);)++o;if(16<o-t&&e.subarray&&C)return C.decode(e.subarray(t,o));for(var i="";t<o;){var a,u,s=e[t++];128&s?(a=63&e[t++],192!=(224&s)?(u=63&e[t++],(s=224==(240&s)?(15&s)<<12|a<<6|u:(7&s)<<18|a<<12|u<<6|63&e[t++])<65536?i+=String.fromCharCode(s):(u=s-65536,i+=String.fromCharCode(55296|u>>10,56320|1023&u))):i+=String.fromCharCode((31&s)<<6|a)):i+=String.fromCharCode(s)}return i}function P(e,t){return e?$(W,e,t):""}function A(e,t,r){return function(e,t,r,n){if(!(0<n))return;for(var o=r,i=r+n-1,a=0;a<e.length;++a){var u=e.charCodeAt(a);if((u=55296<=u&&u<=57343?65536+((1023&u)<<10)|1023&e.charCodeAt(++a):u)<=127){if(i<=r)break;t[r++]=u}else if(u<=2047){if(i<=r+1)break;t[r++]=192|u>>6,t[r++]=128|63&u}else if(u<=65535){if(i<=r+2)break;t[r++]=224|u>>12,t[r++]=128|u>>6&63,t[r++]=128|63&u}else{if(i<=r+3)break;t[r++]=240|u>>18,t[r++]=128|u>>12&63,t[r++]=128|u>>6&63,t[r++]=128|63&u}}return t[r]=0,r-o}(e,W,t,r)}var _,S,W,E,F,k,O,j,R,I="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function x(e,t){for(var r,n=e>>1,o=n+t/2;!(o<=n)&&F[n];)++n;if(32<(r=n<<1)-e&&I)return I.decode(W.subarray(e,r));for(var i="",a=0;!(t/2<=a);++a){var u=E[e+2*a>>1];if(0==u)break;i+=String.fromCharCode(u)}return i}function D(e,t,r){if((r=void 0===r?2147483647:r)<2)return 0;for(var n=t,o=(r-=2)<2*e.length?r/2:e.length,i=0;i<o;++i){var a=e.charCodeAt(i);E[t>>1]=a,t+=2}return E[t>>1]=0,t-n}function U(e){return 2*e.length}function B(e,t){for(var r=0,n="";!(t/4<=r);){var o,i=k[e+4*r>>2];if(0==i)break;++r,65536<=i?(o=i-65536,n+=String.fromCharCode(55296|o>>10,56320|1023&o)):n+=String.fromCharCode(i)}return n}function M(e,t,r){if((r=void 0===r?2147483647:r)<4)return 0;for(var n=t,o=n+r-4,i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),k[t>>2]=a,o<(t+=4)+4)break}return k[t>>2]=0,t-n}function V(e){for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);55296<=n&&n<=57343&&++r,t+=4}return t}function H(e){_=e,a.HEAP8=S=new Int8Array(e),a.HEAP16=E=new Int16Array(e),a.HEAP32=k=new Int32Array(e),a.HEAPU8=W=new Uint8Array(e),a.HEAPU16=F=new Uint16Array(e),a.HEAPU32=O=new Uint32Array(e),a.HEAPF32=j=new Float32Array(e),a.HEAPF64=R=new Float64Array(e)}a.INITIAL_MEMORY;var q,z=[],N=[],G=[],L=[];function X(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)e=a.preRun.shift(),z.unshift(e);var e;ae(z)}function J(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)e=a.postRun.shift(),L.unshift(e);var e;ae(L)}var K=0,Q=null,Y=null;function Z(e){a.onAbort&&a.onAbort(e),m(e+=""),b=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";e=new WebAssembly.RuntimeError(e);throw i(e),e}function ee(e,t){return String.prototype.startsWith?e.startsWith(t):0===e.indexOf(t)}a.preloadedImages={},a.preloadedAudios={};function te(e){return ee(e,"data:application/octet-stream;base64,")}var re="file://";function ne(e){return ee(e,re)}var oe="basis_transcoder.wasm";function ie(e){try{if(e==oe&&g)return new Uint8Array(g);if(s)return s(e);throw"both async and sync fetching of the wasm failed"}catch(e){Z(e)}}function ae(e){for(;0<e.length;){var t,r=e.shift();"function"!=typeof r?"number"==typeof(t=r.func)?void 0===r.arg?q.get(t)():q.get(t)(r.arg):t(void 0===r.arg?null:r.arg):r(a)}}te(oe)||(h=oe,oe=a.locateFile?a.locateFile(h,y):y+h);var ue={};function se(e){for(;e.length;){var t=e.pop();e.pop()(t)}}function ce(e){return this.fromWireType(O[e>>2])}var fe={},le={},pe={},de=48,he=57;function ye(e){if(void 0===e)return"_unknown";var t=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return de<=t&&t<=he?"_"+e:e}function ve(e,t){return e=ye(e),new Function("body","return function "+e+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)}function me(e,t){var r=ve(t,function(e){this.name=t,this.message=e;e=new Error(e).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(e.prototype),(r.prototype.constructor=r).prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var ge=void 0;function we(e){throw new ge(e)}function be(n,t,o){function r(e){var t=o(e);t.length!==n.length&&we("Mismatched type converter count");for(var r=0;r<n.length;++r)_e(n[r],t[r])}n.forEach(function(e){pe[e]=t});var i=new Array(t.length),a=[],u=0;t.forEach(function(e,t){le.hasOwnProperty(e)?i[t]=le[e]:(a.push(e),fe.hasOwnProperty(e)||(fe[e]=[]),fe[e].push(function(){i[t]=le[e],++u===a.length&&r(i)}))}),0===a.length&&r(i)}function Te(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var Ce=void 0;function $e(e){for(var t="",r=e;W[r];)t+=Ce[W[r++]];return t}var Pe=void 0;function Ae(e){throw new Pe(e)}function _e(e,t,r){if(r=r||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=t.name;if(e||Ae('type "'+n+'" must have a positive integer typeid pointer'),le.hasOwnProperty(e)){if(r.ignoreDuplicateRegistrations)return;Ae("Cannot register type '"+n+"' twice")}le[e]=t,delete pe[e],fe.hasOwnProperty(e)&&(t=fe[e],delete fe[e],t.forEach(function(e){e()}))}function Se(e){if(!(this instanceof Me))return!1;if(!(e instanceof Me))return!1;for(var t=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=e.$$.ptrType.registeredClass,o=e.$$.ptr;t.baseClass;)r=t.upcast(r),t=t.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return t===n&&r===o}function We(e){Ae(e.$$.ptrType.registeredClass.name+" instance already deleted")}var Ee=!1;function Fe(e){}function ke(e){--e.count.value,0===e.count.value&&((e=e).smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr))}function Oe(e){return"undefined"==typeof FinalizationGroup?(Oe=function(e){return e},e):(Ee=new FinalizationGroup(function(e){for(var t=e.next();!t.done;t=e.next()){var r=t.value;r.ptr?ke(r):console.warn("object already deleted: "+r.ptr)}}),Fe=function(e){Ee.unregister(e.$$)},(Oe=function(e){return Ee.register(e,e.$$,e.$$),e})(e))}function je(){if(this.$$.ptr||We(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=Oe(Object.create(Object.getPrototypeOf(this),{$$:{value:{count:(e=this.$$).count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function Re(){this.$$.ptr||We(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Ae("Object already scheduled for deletion"),Fe(this),ke(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Ie(){return!this.$$.ptr}var xe=void 0,De=[];function Ue(){for(;De.length;){var e=De.pop();e.$$.deleteScheduled=!1,e.delete()}}function Be(){return this.$$.ptr||We(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Ae("Object already scheduled for deletion"),De.push(this),1===De.length&&xe&&xe(Ue),this.$$.deleteScheduled=!0,this}function Me(){}var Ve={};function He(e,t,r){var n;void 0===e[t].overloadTable&&(n=e[t],e[t]=function(){return e[t].overloadTable.hasOwnProperty(arguments.length)||Ae("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[t].overloadTable+")!"),e[t].overloadTable[arguments.length].apply(this,arguments)},e[t].overloadTable=[],e[t].overloadTable[n.argCount]=n)}function qe(e,t,r){a.hasOwnProperty(e)?((void 0===r||void 0!==a[e].overloadTable&&void 0!==a[e].overloadTable[r])&&Ae("Cannot register public name '"+e+"' twice"),He(a,e,e),a.hasOwnProperty(r)&&Ae("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),a[e].overloadTable[r]=t):(a[e]=t,void 0!==r&&(a[e].numArguments=r))}function ze(e,t,r,n,o,i,a,u){this.name=e,this.constructor=t,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=o,this.getActualType=i,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Ne(e,t,r){for(;t!==r;)t.upcast||Ae("Expected null or instance of "+r.name+", got an instance of "+t.name),e=t.upcast(e),t=t.baseClass;return e}function Ge(e,t){if(null===t)return this.isReference&&Ae("null is not a valid "+this.name),0;t.$$||Ae('Cannot pass "'+Ct(t)+'" as a '+this.name),t.$$.ptr||Ae("Cannot pass deleted object as a pointer of type "+this.name);var r=t.$$.ptrType.registeredClass;return Ne(t.$$.ptr,r,this.registeredClass)}function Le(e,t){if(null===t)return this.isReference&&Ae("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,n),n):0;t.$$||Ae('Cannot pass "'+Ct(t)+'" as a '+this.name),t.$$.ptr||Ae("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&Ae("Cannot convert argument of type "+(t.$$.smartPtrType||t.$$.ptrType).name+" to parameter type "+this.name);var r,n,o=t.$$.ptrType.registeredClass;if(n=Ne(t.$$.ptr,o,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&Ae("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?n=t.$$.smartPtr:Ae("Cannot convert argument of type "+(t.$$.smartPtrType||t.$$.ptrType).name+" to parameter type "+this.name);break;case 1:n=t.$$.smartPtr;break;case 2:t.$$.smartPtrType===this?n=t.$$.smartPtr:(r=t.clone(),n=this.rawShare(n,bt(function(){r.delete()})),null!==e&&e.push(this.rawDestructor,n));break;default:Ae("Unsupporting sharing policy")}return n}function Xe(e,t){if(null===t)return this.isReference&&Ae("null is not a valid "+this.name),0;t.$$||Ae('Cannot pass "'+Ct(t)+'" as a '+this.name),t.$$.ptr||Ae("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&Ae("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name);var r=t.$$.ptrType.registeredClass;return Ne(t.$$.ptr,r,this.registeredClass)}function Je(e){return e=this.rawGetPointee?this.rawGetPointee(e):e}function Ke(e){this.rawDestructor&&this.rawDestructor(e)}function Qe(e){null!==e&&e.delete()}function Ye(){return Object.keys(tt).length}function Ze(){var e,t=[];for(e in tt)tt.hasOwnProperty(e)&&t.push(tt[e]);return t}function et(e){xe=e,De.length&&xe&&xe(Ue)}var tt={};function rt(e,t){return t=function(e,t){for(void 0===t&&Ae("ptr should not be undefined");e.baseClass;)t=e.upcast(t),e=e.baseClass;return t}(e,t),tt[t]}function nt(e,t){return t.ptrType&&t.ptr||we("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!=!!t.smartPtr&&we("Both smartPtrType and smartPtr must be specified"),t.count={value:1},Oe(Object.create(e,{$$:{value:t}}))}function ot(e){var t=this.getPointee(e);if(!t)return this.destructor(e),null;var r=rt(this.registeredClass,t);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=t,r.$$.smartPtr=e,r.clone();var n=r.clone();return this.destructor(e),n}function o(){return this.isSmartPointer?nt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:e}):nt(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var r=this.registeredClass.getActualType(t),n=Ve[r];if(!n)return o.call(this);r=this.isConst?n.constPointerType:n.pointerType,n=function e(t,r,n){if(r===n)return t;if(void 0===n.baseClass)return null;r=e(t,r,n.baseClass);return null===r?null:n.downcast(r)}(t,this.registeredClass,r.registeredClass);return null===n?o.call(this):this.isSmartPointer?nt(r.registeredClass.instancePrototype,{ptrType:r,ptr:n,smartPtrType:this,smartPtr:e}):nt(r.registeredClass.instancePrototype,{ptrType:r,ptr:n})}function it(e,t,r,n,o,i,a,u,s,c,f){this.name=e,this.registeredClass=t,this.isReference=r,this.isConst=n,this.isSmartPointer=o,this.pointeeType=i,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=f,o||void 0!==t.baseClass?this.toWireType=Le:(this.toWireType=n?Ge:Xe,this.destructorFunction=null)}function at(e,t,r){a.hasOwnProperty(e)||we("Replacing nonexistant public symbol"),void 0!==a[e].overloadTable&&void 0!==r?a[e].overloadTable[r]=t:(a[e]=t,a[e].argCount=r)}function ut(e,t,r){return-1!=e.indexOf("j")?(n=t,o=r,e=a["dynCall_"+(e=e)],o&&o.length?e.apply(null,[n].concat(o)):e.call(null,n)):q.get(t).apply(null,r);var n,o}function st(e,t){var r,n,o,i=-1!=(e=$e(e)).indexOf("j")?(r=e,n=t,o=[],function(){o.length=arguments.length;for(var e=0;e<arguments.length;e++)o[e]=arguments[e];return ut(r,n,o)}):q.get(t);return"function"!=typeof i&&Ae("unknown function pointer with signature "+e+": "+t),i}var ct=void 0;function ft(e){var t=Rt(e),e=$e(t);return jt(t),e}function lt(e,t){var r=[],n={};throw t.forEach(function e(t){n[t]||le[t]||(pe[t]?pe[t].forEach(e):(r.push(t),n[t]=!0))}),new ct(e+": "+r.map(ft).join([", "]))}function pt(e,t){for(var r=[],n=0;n<e;n++)r.push(k[(t>>2)+n]);return r}function dt(e,t){if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var r=ve(e.name||"unknownFunctionName",function(){});r.prototype=e.prototype;r=new r,t=e.apply(r,t);return t instanceof Object?t:r}function ht(e,t,r,n,o){var i=t.length;i<2&&Ae("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==r,u=!1,s=1;s<t.length;++s)if(null!==t[s]&&void 0===t[s].destructorFunction){u=!0;break}for(var r="void"!==t[0].name,c="",f="",s=0;s<i-2;++s)c+=(0!==s?", ":"")+"arg"+s,f+=(0!==s?", ":"")+"arg"+s+"Wired";var l="return function "+ye(e)+"("+c+") {\nif (arguments.length !== "+(i-2)+") {\nthrowBindingError('function "+e+" called with ' + arguments.length + ' arguments, expected "+(i-2)+" args!');\n}\n";u&&(l+="var destructors = [];\n");var p=u?"destructors":"null",d=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[Ae,n,o,se,t[0],t[1]];a&&(l+="var thisWired = classParam.toWireType("+p+", this);\n");for(s=0;s<i-2;++s)l+="var arg"+s+"Wired = argType"+s+".toWireType("+p+", arg"+s+"); // "+t[s+2].name+"\n",d.push("argType"+s),h.push(t[s+2]);if(l+=(r?"var rv = ":"")+"invoker(fn"+(0<(f=a?"thisWired"+(0<f.length?", ":"")+f:f).length?", ":"")+f+");\n",u)l+="runDestructors(destructors);\n";else for(s=a?1:2;s<t.length;++s){var y=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==t[s].destructorFunction&&(l+=y+"_dtor("+y+"); // "+t[s].name+"\n",d.push(y+"_dtor"),h.push(t[s].destructorFunction))}return r&&(l+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),d.push(l+="}\n"),dt(Function,d).apply(null,h)}var yt=[],vt=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function mt(e){4<e&&0==--vt[e].refcount&&(vt[e]=void 0,yt.push(e))}function gt(){for(var e=0,t=5;t<vt.length;++t)void 0!==vt[t]&&++e;return e}function wt(){for(var e=5;e<vt.length;++e)if(void 0!==vt[e])return vt[e];return null}function bt(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=yt.length?yt.pop():vt.length;return vt[t]={refcount:1,value:e},t}}function Tt(e,t){var r=le[e];return void 0===r&&Ae(t+" has unknown type "+ft(e)),r}function Ct(e){if(null===e)return"null";var t=typeof e;return"object"==t||"array"==t||"function"==t?e.toString():""+e}function $t(e){return e||Ae("Cannot use deleted val. handle = "+e),vt[e].value}var Pt={};function At(e){var t=Pt[e];return void 0===t?$e(e):t}var _t=[];function St(){return"object"==typeof globalThis?globalThis:Function("return this")()}var Wt={};var Et={mappings:{},buffers:[null,[],[]],printChar:function(e,t){var r=Et.buffers[e];0===t||10===t?((1===e?v:m)($(r,0)),r.length=0):r.push(t)},varargs:void 0,get:function(){return Et.varargs+=4,k[Et.varargs-4>>2]},getStr:function(e){return P(e)},get64:function(e,t){return e}};ge=a.InternalError=me(Error,"InternalError"),function(){for(var e=new Array(256),t=0;t<256;++t)e[t]=String.fromCharCode(t);Ce=e}(),Pe=a.BindingError=me(Error,"BindingError"),Me.prototype.isAliasOf=Se,Me.prototype.clone=je,Me.prototype.delete=Re,Me.prototype.isDeleted=Ie,Me.prototype.deleteLater=Be,it.prototype.getPointee=Je,it.prototype.destructor=Ke,it.prototype.argPackAdvance=8,it.prototype.readValueFromPointer=ce,it.prototype.deleteObject=Qe,it.prototype.fromWireType=ot,a.getInheritedInstanceCount=Ye,a.getLiveInheritedInstances=Ze,a.flushPendingDeletes=Ue,a.setDelayFunction=et,ct=a.UnboundTypeError=me(Error,"UnboundTypeError"),a.count_emval_handles=gt,a.get_first_emval=wt;var Ft,kt={t:function(e){var t=ue[e];delete ue[e];var o=t.rawConstructor,i=t.rawDestructor,l=t.fields;be([e],l.map(function(e){return e.getterReturnType}).concat(l.map(function(e){return e.setterArgumentType})),function(c){var f={};return l.forEach(function(e,t){var r=e.fieldName,n=c[t],o=e.getter,i=e.getterContext,a=c[t+l.length],u=e.setter,s=e.setterContext;f[r]={read:function(e){return n.fromWireType(o(i,e))},write:function(e,t){var r=[];u(s,e,a.toWireType(r,t)),se(r)}}}),[{name:t.name,fromWireType:function(e){var t,r={};for(t in f)r[t]=f[t].read(e);return i(e),r},toWireType:function(e,t){for(var r in f)if(!(r in t))throw new TypeError('Missing field:  "'+r+'"');var n=o();for(r in f)f[r].write(n,t[r]);return null!==e&&e.push(i,n),n},argPackAdvance:8,readValueFromPointer:ce,destructorFunction:i}]})},I:function(e,r,n,o,i){var a=Te(n);_e(e,{name:r=$e(r),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?o:i},argPackAdvance:8,readValueFromPointer:function(e){var t;if(1===n)t=S;else if(2===n)t=E;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+r);t=k}return this.fromWireType(t[e>>a])},destructorFunction:null})},x:function(a,e,t,u,r,s,n,c,o,f,l,i,p){l=$e(l),s=st(r,s),c=c&&st(n,c),f=f&&st(o,f),p=st(i,p);var d=ye(l);qe(d,function(){lt("Cannot construct "+l+" due to unbound types",[u])}),be([a,e,t],u?[u]:[],function(e){e=e[0];var t=u?(i=e.registeredClass).instancePrototype:Me.prototype,r=ve(d,function(){if(Object.getPrototypeOf(this)!==n)throw new Pe("Use 'new' to construct "+l);if(void 0===o.constructor_body)throw new Pe(l+" has no accessible constructor");var e=o.constructor_body[arguments.length];if(void 0===e)throw new Pe("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(o.constructor_body).toString()+") parameters instead!");return e.apply(this,arguments)}),n=Object.create(t,{constructor:{value:r}});r.prototype=n;var o=new ze(l,r,n,p,i,s,c,f),e=new it(l,o,!0,!1,!1),t=new it(l+"*",o,!1,!1,!1),i=new it(l+" const*",o,!1,!0,!1);return Ve[a]={pointerType:t,constPointerType:i},at(d,r),[e,t,i]})},w:function(e,o,t,r,i,n){T(0<o);var a=pt(o,t);i=st(r,i);var u=[n],s=[];be([],[e],function(e){var n="constructor "+(e=e[0]).name;if(void 0===e.registeredClass.constructor_body&&(e.registeredClass.constructor_body=[]),void 0!==e.registeredClass.constructor_body[o-1])throw new Pe("Cannot register multiple constructors with identical number of parameters ("+(o-1)+") for class '"+e.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return e.registeredClass.constructor_body[o-1]=function(){lt("Cannot construct "+e.name+" due to unbound types",a)},be([],a,function(r){return e.registeredClass.constructor_body[o-1]=function(){arguments.length!==o-1&&Ae(n+" called with "+arguments.length+" arguments, expected "+(o-1)),s.length=0,u.length=o;for(var e=1;e<o;++e)u[e]=r[e].toWireType(s,arguments[e-1]);var t=i.apply(null,u);return se(s),r[0].fromWireType(t)},[]}),[]})},d:function(e,i,a,t,r,u,s,c){var f=pt(a,t);i=$e(i),u=st(r,u),be([],[e],function(t){var r=(t=t[0]).name+"."+i;function e(){lt("Cannot call "+r+" due to unbound types",f)}c&&t.registeredClass.pureVirtualFunctions.push(i);var n=t.registeredClass.instancePrototype,o=n[i];return void 0===o||void 0===o.overloadTable&&o.className!==t.name&&o.argCount===a-2?(e.argCount=a-2,e.className=t.name,n[i]=e):(He(n,i,r),n[i].overloadTable[a-2]=e),be([],f,function(e){e=ht(r,e,t,u,s);return void 0===n[i].overloadTable?(e.argCount=a-2,n[i]=e):n[i].overloadTable[a-2]=e,[]}),[]})},k:function(t,e,r){t=$e(t),be([],[e],function(e){return e=e[0],a[t]=e.fromWireType(r),[]})},H:function(e,t){_e(e,{name:t=$e(t),fromWireType:function(e){var t=vt[e].value;return mt(e),t},toWireType:function(e,t){return bt(t)},argPackAdvance:8,readValueFromPointer:ce,destructorFunction:null})},n:function(e,t,r,n){function o(){}r=Te(r),t=$e(t),o.values={},_e(e,{name:t,constructor:o,fromWireType:function(e){return this.constructor.values[e]},toWireType:function(e,t){return t.value},argPackAdvance:8,readValueFromPointer:function(e,t,r){switch(t){case 0:return function(e){var t=r?S:W;return this.fromWireType(t[e])};case 1:return function(e){var t=r?E:F;return this.fromWireType(t[e>>1])};case 2:return function(e){var t=r?k:O;return this.fromWireType(t[e>>2])};default:throw new TypeError("Unknown integer type: "+e)}}(t,r,n),destructorFunction:null}),qe(t,o)},a:function(e,t,r){var n=Tt(e,"enum");t=$e(t),e=n.constructor,n=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:ve(n.name+"_"+t,function(){})}}),e.values[r]=n,e[t]=n},A:function(e,t,r){r=Te(r),_e(e,{name:t=$e(t),fromWireType:function(e){return e},toWireType:function(e,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Ct(t)+'" to '+this.name);return t},argPackAdvance:8,readValueFromPointer:function(e,t){switch(t){case 2:return function(e){return this.fromWireType(j[e>>2])};case 3:return function(e){return this.fromWireType(R[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}(t,r),destructorFunction:null})},i:function(t,r,e,n,o,i){var a=pt(r,e);t=$e(t),o=st(n,o),qe(t,function(){lt("Cannot call "+t+" due to unbound types",a)},r-1),be([],a,function(e){e=[e[0],null].concat(e.slice(1));return at(t,ht(t,e,null,o,i),r-1),[]})},j:function(e,r,t,n,o){r=$e(r),-1===o&&(o=4294967295);var i,a=Te(t),u=function(e){return e};0===n&&(i=32-8*t,u=function(e){return e<<i>>>i});var s=-1!=r.indexOf("unsigned");_e(e,{name:r,fromWireType:u,toWireType:function(e,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Ct(t)+'" to '+this.name);if(t<n||o<t)throw new TypeError('Passing a number "'+Ct(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+n+", "+o+"]!");return s?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:function(e,t,r){switch(t){case 0:return r?function(e){return S[e]}:function(e){return W[e]};case 1:return r?function(e){return E[e>>1]}:function(e){return F[e>>1]};case 2:return r?function(e){return k[e>>2]}:function(e){return O[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}(r,a,0!==n),destructorFunction:null})},h:function(e,t,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function o(e){var t=O,r=t[e>>=2],e=t[e+1];return new n(_,e,r)}_e(e,{name:r=$e(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},B:function(e,t){var s="std::string"===(t=$e(t));_e(e,{name:t,fromWireType:function(e){var t,r=O[e>>2];if(s)for(var n=e+4,o=0;o<=r;++o){var i,a=e+4+o;o!=r&&0!=W[a]||(i=P(n,a-n),void 0===t?t=i:(t+=String.fromCharCode(0),t+=i),n=a+1)}else{for(var u=new Array(r),o=0;o<r;++o)u[o]=String.fromCharCode(W[e+4+o]);t=u.join("")}return jt(e),t},toWireType:function(e,t){var r="string"==typeof(t=t instanceof ArrayBuffer?new Uint8Array(t):t);r||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||Ae("Cannot pass non-string to std::string");var n=(s&&r?function(){return function(e){for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);(n=55296<=n&&n<=57343?65536+((1023&n)<<10)|1023&e.charCodeAt(++r):n)<=127?++t:t+=n<=2047?2:n<=65535?3:4}return t}(t)}:function(){return t.length})(),o=Ot(4+n+1);if(O[o>>2]=n,s&&r)A(t,o+4,n+1);else if(r)for(var i=0;i<n;++i){var a=t.charCodeAt(i);255<a&&(jt(o),Ae("String has UTF-16 code units that do not fit in 8 bits")),W[o+4+i]=a}else for(i=0;i<n;++i)W[o+4+i]=t[i];return null!==e&&e.push(jt,o),o},argPackAdvance:8,readValueFromPointer:ce,destructorFunction:function(e){jt(e)}})},v:function(e,s,o){var c,i,f,a,l;o=$e(o),2===s?(c=x,i=D,a=U,f=function(){return F},l=1):4===s&&(c=B,i=M,a=V,f=function(){return O},l=2),_e(e,{name:o,fromWireType:function(e){for(var t,r=O[e>>2],n=f(),o=e+4,i=0;i<=r;++i){var a,u=e+4+i*s;i!=r&&0!=n[u>>l]||(a=c(o,u-o),void 0===t?t=a:(t+=String.fromCharCode(0),t+=a),o=u+s)}return jt(e),t},toWireType:function(e,t){"string"!=typeof t&&Ae("Cannot pass non-string to C++ string type "+o);var r=a(t),n=Ot(4+r+s);return O[n>>2]=r>>l,i(t,n+4,r+s),null!==e&&e.push(jt,n),n},argPackAdvance:8,readValueFromPointer:ce,destructorFunction:function(e){jt(e)}})},u:function(e,t,r,n,o,i){ue[e]={name:$e(t),rawConstructor:st(r,n),rawDestructor:st(o,i),fields:[]}},c:function(e,t,r,n,o,i,a,u,s,c){ue[e].fields.push({fieldName:$e(t),getterReturnType:r,getter:st(n,o),getterContext:i,setterArgumentType:a,setter:st(u,s),setterContext:c})},J:function(e,t){_e(e,{isVoid:!0,name:t=$e(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,t){}})},m:function(e,t,r){e=$t(e),t=Tt(t,"emval::as");var n=[],o=bt(n);return k[r>>2]=o,t.toWireType(n,e)},s:function(e,t,r,n){(e=_t[e])(t=$t(t),r=At(r),null,n)},b:mt,y:function(e){return 0===e?bt(St()):(e=At(e),bt(St()[e]))},p:function(e,t){for(var r=function(e,t){for(var r=new Array(e),n=0;n<e;++n)r[n]=Tt(k[(t>>2)+n],"parameter "+n);return r}(e,t),n=r[0],t=n.name+"_$"+r.slice(1).map(function(e){return e.name}).join("_")+"$",o=["retType"],i=[n],a="",u=0;u<e-1;++u)a+=(0!==u?", ":"")+"arg"+u,o.push("argType"+u),i.push(r[1+u]);for(var s="return function "+ye("methodCaller_"+t)+"(handle, name, destructors, args) {\n",c=0,u=0;u<e-1;++u)s+="    var arg"+u+" = argType"+u+".readValueFromPointer(args"+(c?"+"+c:"")+");\n",c+=r[u+1].argPackAdvance;for(s+="    var rv = handle[name]("+a+");\n",u=0;u<e-1;++u)r[u+1].deleteObject&&(s+="    argType"+u+".deleteObject(arg"+u+");\n");return n.isVoid||(s+="    return retType.toWireType(destructors, rv);\n"),o.push(s+="};\n"),t=dt(Function,o).apply(null,i),n=_t.length,_t.push(t),n},r:function(e){return e=At(e),bt(a[e])},e:function(e,t){return bt((e=$t(e))[t=$t(t)])},g:function(e){4<e&&(vt[e].refcount+=1)},q:function(e,t,r,n){e=$t(e);var o=Wt[t];return o||(o=function(e){for(var t="",r=0;r<e;++r)t+=(0!==r?", ":"")+"arg"+r;for(var n="return function emval_allocator_"+e+"(constructor, argTypes, args) {\n",r=0;r<e;++r)n+="var argType"+r+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+r+'], "parameter '+r+'");\nvar arg'+r+" = argType"+r+".readValueFromPointer(args);\nargs += argType"+r+"['argPackAdvance'];\n";return n+="var obj = new constructor("+t+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",n)(Tt,a,bt)}(t),Wt[t]=o),o(e,r,n)},f:function(e){return bt(At(e))},l:function(e){se(vt[e].value),mt(e)},o:function(){Z()},E:function(e,t,r){W.copyWithin(e,t,t+r)},F:function(e){var t=W.length,r=2147483648;if(r<(e>>>=0))return!1;for(var n,o=1;o<=4;o*=2){var i=t*(1+.2/o),i=Math.min(i,e+100663296);if(function(e){try{return w.grow(e-_.byteLength+65535>>>16),H(w.buffer),1}catch(e){}}(Math.min(r,(0<(n=Math.max(e,i))%(i=65536)&&(n+=i-n%i),n))))return!0}return!1},G:function(e){return 0},C:function(e,t,r,n,o){},z:function(e,t,r,n){for(var o=0,i=0;i<r;i++){for(var a=k[t+8*i>>2],u=k[t+(8*i+4)>>2],s=0;s<u;s++)Et.printChar(e,W[a+s]);o+=u}return k[n>>2]=o,0},D:function(e){0}},Ot=(function(){var t={a:kt};function r(e,t){var e=e.exports;a.asm=e,H((w=a.asm.K).buffer),q=a.asm.O,e=a.asm.L,N.unshift(e),K--,a.monitorRunDependencies&&a.monitorRunDependencies(K),0==K&&(null!==Q&&(clearInterval(Q),Q=null),Y&&(e=Y,Y=null,e()))}function n(e){r(e.instance)}function o(e){return function(){if(!g&&(l||p)){if("function"==typeof fetch&&!ne(oe))return fetch(oe,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+oe+"'";return e.arrayBuffer()}).catch(function(){return ie(oe)});if(u)return new Promise(function(t,e){u(oe,function(e){t(new Uint8Array(e))},e)})}return Promise.resolve().then(function(){return ie(oe)})}().then(function(e){return WebAssembly.instantiate(e,t)}).then(e,function(e){m("failed to asynchronously prepare wasm: "+e),Z(e)})}if(K++,a.monitorRunDependencies&&a.monitorRunDependencies(K),a.instantiateWasm)try{return a.instantiateWasm(t,r)}catch(e){return m("Module.instantiateWasm callback failed with error: "+e)}(g||"function"!=typeof WebAssembly.instantiateStreaming||te(oe)||ne(oe)||"function"!=typeof fetch?o(n):fetch(oe,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,t).then(n,function(e){return m("wasm streaming compile failed: "+e),m("falling back to ArrayBuffer instantiation"),o(n)})})).catch(i)}(),a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.L).apply(null,arguments)},a._malloc=function(){return(Ot=a._malloc=a.asm.M).apply(null,arguments)}),jt=a._free=function(){return(jt=a._free=a.asm.N).apply(null,arguments)},Rt=a.___getTypeName=function(){return(Rt=a.___getTypeName=a.asm.P).apply(null,arguments)};a.___embind_register_native_and_builtin_types=function(){return(a.___embind_register_native_and_builtin_types=a.asm.Q).apply(null,arguments)},a.dynCall_jiji=function(){return(a.dynCall_jiji=a.asm.R).apply(null,arguments)};function It(e){function t(){Ft||(Ft=!0,a.calledRun=!0,b||(ae(N),ae(G),r(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),J()))}0<K||(X(),0<K||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),t()},1)):t()))}if(Y=function e(){Ft||It(),Ft||(Y=e)},a.run=It,a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();return It(),e.ready}}();"object"==typeof exports&&"object"==typeof module?module.exports=BASIS:"function"==typeof define&&define.amd?define([],function(){return BASIS}):"object"==typeof exports&&(exports.BASIS=BASIS);