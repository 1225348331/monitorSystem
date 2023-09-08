/**
 *
 */

(function () {
    var cgs2000Ellipsolid = new Cesium.Ellipsoid(6378137.0, 6378137.0, 6356752.31414035585);
    //强制的EPSG代码，用于将不同服务的坐标系转换到当前坐标系
    var sceneForceDefaultEPSG = 'EPSG:4490';
    var kqWeb3d = {
        /** 地图配置 */
        mapConfig: {},
        /**
         * Cesium对象
         */
        Cesium: undefined,

        /**
         * @private
         */
        defined() {
            if (typeof this.Cesium == 'undefined' || typeof Cesium != 'object') {
                throw new Error('kqWeb3d.Cesium is not defined.');
                return false;
            }
            return true;
        },
        /**
         * 创建地图
         * @param  {Object} options
         *      options.id 地图存放容器
         *      options.url 地图配置路径
         * @return {Promise} 地图创建状态
         */
        createMap: function (options) {
            var that = this;
            var Cesium = this.Cesium;
            var cgs2000Ellipsolid = new Cesium.Ellipsoid(6378137.0, 6378137.0, 6356752.31414035585);
            var promise = new Promise(function (resolve, reject) {
                if (!that.defined()) {
                    reject();
                } else {
                    var isMobile = !Cesium.FeatureDetection.isPCBrowser();
                    options = Cesium.defaultValue(options, {});
                    Cesium.loadJson(options.url).then(function (data) {
                        that.mapConfig = data;
                        // use the loaded
                        var map3d = Cesium.defaultValue(data.map3d, {});
                        var imageryProviders = [];
                        var imagerymapsConfig = Cesium.defaultValue(map3d.imagerymaps, []);
                        for (var i = 0; i < imagerymapsConfig.length; i++) {
                            if (Cesium.defined(imagerymapsConfig[i].isLoad) && !imagerymapsConfig[i].isLoad)
                                continue;
                            var p = that.createMapProvider(imagerymapsConfig[i]);
                            if (p) {
                                p.__visible = Cesium.defaultValue(imagerymapsConfig[i].visible, true);
                                p.brightness = Cesium.defaultValue(imagerymapsConfig[i].brightness, undefined);
                                imageryProviders.push(p);
                            }
                        }
                        console.log(6)
                        var viewer = new Cesium.Viewer(options.id, {
                            imageryProvider: Cesium.defined(imageryProviders[1]) ? imageryProviders[1] : undefined,
                            baseLayerPicker: Cesium.defaultValue(map3d.baseLayerPicker, undefined),
                            sceneModePicker: Cesium.defaultValue(map3d.sceneModePicker, undefined),
                            geocoder: Cesium.defaultValue(map3d.geocoder, undefined),
                            homeButton: Cesium.defaultValue(map3d.homeButton, undefined),
                            navigationHelpButton: Cesium.defaultValue(map3d.navigationHelpButton, undefined),
                            infoBox: Cesium.defaultValue(map3d.infoBox, undefined),
                            animation: true, //Cesium.defaultValue(map3d.animation, undefined),
                            timeline: true, //Cesium.defaultValue(map3d.timeline, undefined),
                            fullscreenButton: true,//Cesium.defaultValue(map3d.fullscreenButton, undefined),
                            vrButton: true,//Cesium.defaultValue(map3d.vrButton, undefined),
                            shadows: Cesium.defaultValue(map3d.shadows, undefined),
                            shouldAnimate: Cesium.defaultValue(map3d.shouldAnimate, undefined),
                            languageStyle: Cesium.defaultValue(map3d.lang, undefined),
                            showStatusBar: Cesium.defaultValue(map3d.showStatusBar, undefined),
                            sceneMode: Cesium.defaultValue(map3d.sceneMode, undefined),
                            projectionPicker: Cesium.defaultValue(map3d.projectionPicker, undefined),
                            selectionIndicator: Cesium.defaultValue(map3d.selectionIndicator, undefined),
                            navigationInstructionsInitiallyVisible: Cesium.defaultValue(map3d.navigationInstructionsInitiallyVisible, undefined),
                            scene3DOnly: Cesium.defaultValue(map3d.scene3DOnly, undefined),
                            useDefaultRenderLoop: Cesium.defaultValue(map3d.useDefaultRenderLoop, undefined),
                            showRenderLoopErrors: Cesium.defaultValue(map3d.showRenderLoopErrors, undefined),
                            automaticallyTrackDataSourceClocks: Cesium.defaultValue(map3d.automaticallyTrackDataSourceClocks, undefined),
                            orderIndependentTranslucency: Cesium.defaultValue(map3d.orderIndependentTranslucency, undefined),
                            terrainExaggeration: Cesium.defaultValue(map3d.terrainExaggeration, undefined),
                            requestRenderMode: Cesium.defaultValue(map3d.requestRenderMode, undefined),
                            /* skyBox: new Cesium.SkyBox({
                                 sources: {
                                     positiveX: 'static/assets/images/skybox/sunny/px.png',
                                     negativeX: 'static/assets/images/skybox/sunny/nx.png',
                                     positiveY: 'static/assets/images/skybox/sunny/py.png',
                                     negativeY: 'static/assets/images/skybox/sunny/ny.png',
                                     positiveZ: 'static/assets/images/skybox/sunny/pz.png',
                                     negativeZ: 'static/assets/images/skybox/sunny/nz.png'
                                 }
                             })*/
                            // globe: new Cesium.Globe(cgs2000Ellipsolid) //CGCS2000 国家椭球
                        });
                        viewer.cesiumWidget._innerCreditContainer.style.display = 'none';
                        if (Cesium.defined(map3d.animation) && map3d.animation == false)
                            viewer.animation.container.style.visibility = 'hidden';
                        if (Cesium.defined(map3d.timeline) && map3d.timeline == false)
                            viewer.timeline.container.style.visibility = 'hidden';
                        //viewer.animation.container.style.visibility = 'hidden';
                        //viewer.scene.globe.enableLighting = false;
                        //隐藏全屏按钮
                        if (Cesium.defined(map3d.fullscreenButton) && map3d.fullscreenButton == false) {
                            viewer.fullscreenButton.container.style.display = 'none';
                        }
                        //隐藏VR按钮
                        if (Cesium.defined(map3d.vrButton) && map3d.vrButton == false) {
                            viewer.vrButton.container.style.display = 'none';
                        }

                        viewer.statusBar.readyPromise.then(function () {
                            viewer.statusBar.hideCopyright();
                        });
                        if (imageryProviders.length >= 1) {
                            if (Cesium.defined(imageryProviders[0].brightness)) {
                                var layer0 = viewer.imageryLayers.get(0);
                                layer0.brightness = imageryProviders[0].brightness;
                            }
                            for (var i = 1; i < imageryProviders.length; i++) {
                                var imageLayer = viewer.imageryLayers.addImageryProvider(imageryProviders[i]);
                                if (imageryProviders[i].__visible == false)
                                    imageLayer.show = false;
                                if (Cesium.defined(imageryProviders[i].brightness)) {
                                    imageLayer.brightness = imageryProviders[i].brightness;
                                }
                                imageLayer._name = imageryProviders[i]._name;
                            }
                        }

                        //导航控件设置（指北针、缩放按钮、比例尺等）
                        /*if (Cesium.defined(map3d.navigation) && typeof map3d.navigation == 'object' &&
                            (!Cesium.defined(map3d.navigation.show) || map3d.navigation.show)) {
                            var navigation = map3d.navigation;
                            var defaultResetView = Cesium.defaultValue(navigation.defaultResetView, {});
                            var lon = Cesium.defaultValue(defaultResetView.x, undefined),
                                lat = Cesium.defaultValue(defaultResetView.y, undefined),
                                height = Cesium.defaultValue(defaultResetView.z, undefined);
                            if (Cesium.defined(lon) && Cesium.defined(lat) && Cesium.defined(height)) {
                                navigation.defaultResetView = new Cesium.Cartographic(lon, lat, height);
                            } else {
                                delete navigation.defaultResetView;
                            }
                            viewer.extend(Cesium.viewerCesiumNavigationMixin, navigation);

                            if (Cesium.defined(navigation.enableCompass) && navigation.enableCompass == false) {
                                viewer.cesiumNavigation.navigationViewModel.showCompass = false;

                            }
                            if (Cesium.defined(navigation.enableZoomControls) && navigation.enableZoomControls == false) {
                                viewer.cesiumNavigation.navigationViewModel.controls[0].isActive = false;

                            }
                            if (Cesium.defined(navigation.enableDistanceLegend) && navigation.enableDistanceLegend == false) {
                                viewer.cesiumNavigation.distanceLegendDiv.style.display = 'none';

                            }
                            if (Cesium.defined(navigation.enableCompassOuterRing) && navigation.enableCompassOuterRing == false) { }
                        }
                        */

                        //指北针
                        // var navigationContainer = document.createElement('div');
                        // navigationContainer.className = 'cesium-viewer-navigationContainer';
                        // viewer.container.appendChild(navigationContainer);
                        // navigationContainer.style.display = 'none';
                        // var viewerNavigation = new Cesium.Navigation({
                        //     container: navigationContainer,
                        //     scene: viewer.scene,
                        //     viewer: viewer
                        // });
                        // if (Cesium.defined(map3d.navigation) && typeof map3d.navigation == 'object' &&
                        //     (!Cesium.defined(map3d.navigation.show) || map3d.navigation.show)) {
                        //     navigationContainer.style.display = 'block';
                        //     if (map3d.navigation.style) {
                        //         for (var t in map3d.navigation.style) {
                        //             navigationContainer.style[t] = map3d.navigation.style[t];
                        //         }
                        //     }
                        // }
                        if (Cesium.defined(map3d.style)) {
                            viewer.scene.globe.enableLighting = Cesium.defaultValue(map3d.style.lighting, false);
                            viewer.scene.globe.showWaterEffect = isMobile ? false : Cesium.defaultValue(map3d.style.water, true);
                            viewer.scene.globe.depthTestAgainstTerrain = Cesium.defaultValue(map3d.style.testTerrain, false);
                            viewer.scene.skyAtmosphere.show = Cesium.defaultValue(map3d.style.atmosphere, undefined);
                            viewer.scene.fog.enabled = Cesium.defaultValue(map3d.style.fog, undefined);
                            viewer.scene.skyBox.show = Cesium.defaultValue(map3d.style.skyBox, true);
                            viewer.scene.sun.show = Cesium.defaultValue(map3d.style.sun, true);
                            viewer.scene.moon.show = Cesium.defaultValue(map3d.style.moon, true);

                            viewer.scene.highDynamicRange = isMobile ? false : Cesium.defaultValue(map3d.style.highDynamicRange, true);
                            viewer.scene.globe.showGroundAtmosphere = isMobile ? false : Cesium.defaultValue(map3d.style.groundAtmosphere, true);
                        }

                        if (Cesium.defined(map3d.home) && Cesium.defined(map3d.home.west) && Cesium.defined(map3d.home.south) &&
                            Cesium.defined(map3d.home.east) && Cesium.defined(map3d.home.north)) {
                            Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(map3d.home.west,
                                map3d.home.south, map3d.home.east, map3d.home.north);
                        }
                        if (Cesium.defined(map3d.time)) {
                            time = Cesium.JulianDate.fromDate(new Date(map3d.time));
                            viewer.clock.startTime = time
                            viewer.clock.endTime = time;
                            viewer.clock.currentTime = time;
                            viewer.timeline.zoomTo(time, time);
                        }

                        if (Cesium.defined(map3d.brightness) && map3d.brightness != 1) {
                            var stages = viewer.scene.postProcessStages;
                            var brightnessStage = stages.add(Cesium.PostProcessStageLibrary.createBrightnessStage());
                            brightnessStage.enabled = true;
                            brightnessStage.uniforms.brightness = Number(map3d.brightness);
                        }

                        if (map3d.autohiddenmaps) {
                            that.autoHideMapLayerByHeight(viewer, map3d.autohiddenmaps);
                        }

                        if (map3d.enableKey) { //是否默认启用键盘操作
                            that.startKeyHandler(viewer);
                        }

                        // 将绘制和测量操控器追加到viewer内
                        viewer.measureHandler = new Cesium.Kq3dMeasureHandler(viewer, {
                            dblClickEnd: true
                        });
                        viewer.drawHandler = new Cesium.DrawHandler(viewer, {
                            dblClickEnd: true
                        });
                        if (Cesium.defined(map3d.center)) {
                            var lon = Cesium.defaultValue(map3d.center.x, undefined),
                                lat = Cesium.defaultValue(map3d.center.y, undefined),
                                height = Cesium.defaultValue(map3d.center.z, undefined),
                                heading = Cesium.defaultValue(map3d.center.heading, 0),
                                pitch = Cesium.defaultValue(map3d.center.pitch, -90),
                                roll = Cesium.defaultValue(map3d.center.roll, 0);
                            if (Cesium.defined(lon) && Cesium.defined(lat) && Cesium.defined(height)) {
                                // setTimeout(function () {
                                //     viewer.camera.flyTo({
                                //         destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
                                //         orientation: {
                                //             heading: Cesium.Math.toRadians(heading),
                                //             pitch: Cesium.Math.toRadians(pitch),
                                //             roll: Cesium.Math.toRadians(roll)
                                //         },
                                //         duration: 1.5
                                //     });
                                //     resolve(viewer);
                                // }, 100);
                            } else {
                                resolve(viewer);
                            }
                        } else {
                            resolve(viewer);
                        }
                    }).otherwise(function (error) {
                        // an error occurred
                        reject();
                    });
                }
            });

            return promise;
        },

        /**
         * 添加影像图层
         * @param {Cesium.Viewer | Cesium.ImageryLayerCollection}viewer 三维视窗对象
         * @param {Object}options 图层配置
         * @return {Cesium.ImageryLayer} 影像图层对象那
         */
        addImageryLayer: function (viewer, options) {
            var Cesium = this.Cesium;
            var imgProvider = this.createMapProvider(options);
            var imageryLayer = undefined;
            if (Cesium.defined(imgProvider)) {
                if (viewer instanceof Cesium.Viewer) {
                    imageryLayer = viewer.imageryLayers.addImageryProvider(imgProvider);
                } else if (viewer instanceof Cesium.ImageryLayerCollection) {
                    imageryLayer = viewer.addImageryProvider(imgProvider);
                } else {
                    cosole.warn('The type of viewer must be Cesium.Viewer or Cesium.ImageryLayerCollection.');
                }
            }
            return imageryLayer;
        },

        adjust3Dtileset(tileset, longitude, latitude, offsetHeight) {
            // var transform = new window.Cesium.Kq3dTransform(); // 模型的变换 平移和旋转
            var boundingSphere = tileset.boundingSphere;
            var cartographic = window.Cesium.Cartographic.fromCartesian(
                boundingSphere.center
            );
            longitude = longitude || cartographic.longitude;
            latitude = latitude || cartographic.latitude;
            var surface = window.Cesium.Cartesian3.fromRadians(
                cartographic.longitude,
                cartographic.latitude,
                0.0
            );
            // var offset = window.Cesium.Cartesian3.fromRadians(longitude, latitude, -10468.05); //带高程的新笛卡尔坐标
            var offset = window.Cesium.Cartesian3.fromRadians(
                longitude,
                latitude,
                offsetHeight
            ); //带高程的新笛卡尔坐标
            var translate = window.Cesium.Cartesian3.subtract(
                offset,
                surface,
                new window.Cesium.Cartesian3()
            ); //做差得到变换矩阵
            tileset.modelMatrix = window.Cesium.Matrix4.fromTranslation(translate);
        },

        /**
         * @param {Cesium.Viewer} viewer 三维视窗对象
         * @param {Object} options 3DTileset图层配制
         * @return {Promise} 3DTileset图层加载状态
         */
        add3DTilesetLayer: function (viewer, options) {
            var that = this;
            var Cesium = this.Cesium;
            //var t = this.createCesium3DTileset(options);
            return new Promise(function (resolve, reject) {
                that.createCesium3DTilesetAsyn(options).then(function (t) {
                    if (t) {
                        if (options.customShader) {
                            t.customContext = viewer.scene.context;
                        }
                        var tileset = viewer.scene.primitives.add(t);
                        // options.offsetZ = -1200;
                        tileset.readyPromise.then(function (tileset) {
                            tileset.__options = t.__options;
                            // tileset.kq3dCustomShader = { fsBody: '' };
                            if (Cesium.defined(options.position) && options.position instanceof Array && options.position.length >= 2) {
                                var longitude = options.position[0],
                                    latitude = options.position[1],
                                    height = options.position[2] || 0;
                                var position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);
                                var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
                                var heading = Cesium.defaultValue(options.heading, 0);
                                var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading)));
                                Cesium.Matrix4.multiply(mat, rotationX, mat);
                                tileset._root.transform = mat;
                            } else if (Cesium.defined(options.offsetZ)) {
                                //往上移动一段距离
                                var heightOffset = Number(options.offsetZ);//50.00;
                                var boundingSphere = tileset.boundingSphere;
                                var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
                                //var position = Cesium.Cartesian3.fromDegrees(cartographic.longitude, cartographic.latitude, heightOffset);
                                //var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
                                //tileset._root.transform = mat;
                                var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
                                var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
                                var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
                                tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
                            }
                            if (Cesium.defined(options.isFly) && options.isFly) {
                                var boundingSphere = tileset.boundingSphere;
                                viewer.camera.flyToBoundingSphere(boundingSphere, { duration: 1.5 });
                                //viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000) });
                            }
                            //that.adjust3Dtileset(tileset, null, null, -1100);
                            that.set3DTilesLayerOtherProperties(tileset, options);
                            resolve(tileset);
                        });
                        /*.otherwise(function(error) {
                            console.warn('3DTileset add failed.');
                            reject(error);
                        });*/
                    } else {
                        reject(error);
                    }
                });
            });
        },

        /**
         * 设置3dTiles图层的其他属性
         * @param {Cesium.Cesium3DTileset} tileset
         * @param {Object} options
         */
        set3DTilesLayerOtherProperties: function (tileset, options) {
            if (Cesium.defined(options.style)) {
                try {
                    var style = eval('(function(){' + options.style + '})();');
                    if (typeof style == 'object' && style !== null) {
                        tileset.style = new Cesium.Cesium3DTileStyle(style);
                    }
                } catch (error) { }
                // tileset.style = new Cesium.Cesium3DTileStyle(options.style);
            }

            if (options.customShader) {
                var shader = {
                    vsHeader: '',
                    vsBody: '',
                    fsHeader: '',
                    fsBody: `
                        float k3d_a11 = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
                        //float k3d_a12 = v_elevationPos.z / 60.0 + sin(k3d_a11) * 0.1;
                        float k3d_a12 = v_elevationPos.z / 60.0 + sin(k3d_a11) * 0.1;
                        gl_FragColor *= vec4(k3d_a12, k3d_a12, k3d_a12, 1.0);
                        float k3d_a13 = fract(czm_frameNumber / 360.0);
                        float k3d_h = clamp(v_elevationPos.z / 300.0, 0.0, 1.0);
                        k3d_a13 = abs(k3d_a13 - 0.5) * 2.0;
                        float k3d_diff = step(0.005, abs(k3d_h - k3d_a13));
                        gl_FragColor.rgb += gl_FragColor.rgb * (1.0 - k3d_diff);
                    `
                }
                tileset.kq3dCustomShader = shader;
            }
        },

        /**
         * 创建地图提供者
         * @para{}
         */
        createMapProvider: function (options) {
            var Cesium = this.Cesium;
            options = Cesium.defaultValue(options, {});
            var imgProvider = undefined;
            var type = Cesium.defaultValue(options.type, '');
            type = type.toLowerCase();
            try {
                switch (type) {
                    case 'tianditu':
                        var key = (Cesium.defined(options.key) && options.key !== '') ? options.key : undefined;
                        options.key = key;
                        options.mapStyle = Cesium.defaultValue(options.mapStyle, options.layer);
                        if (Cesium.defined(options.mapStyle) && options.mapStyle !== '') {
                            imgProvider = new Cesium.TiandituImageryProvider(options);
                        } else {
                            console.warn('TiandituImageryProvider:options.mapStyle is not defined');
                        }
                        break;
                    case 'bingmaps':
                        options.url = (Cesium.defined(options.url) && options.url !== '') ? options.url : undefined;
                        options.key = (Cesium.defined(options.key) && options.key !== '') ? options.key : undefined;
                        options.mapStyle = Cesium.defaultValue(options.mapStyle, options.layer);
                        if (Cesium.defined(options.url) && Cesium.defined(options.mapStyle) && options.mapStyle !== '') {
                            imgProvider = new Cesium.BingMapsImageryProvider(options);
                        } else {
                            console.warn('BingMapsImageryProvider:options.url and options.mapStyle is not defined');
                        }
                        break;
                    case 'mapbox':
                        options.key = (Cesium.defined(options.key) && options.key !== '') ? options.key : undefined;
                        options.mapId = Cesium.defaultValue(options.mapId, options.layer);
                        if (Cesium.defined(options.mapId) && options.mapId !== '') {
                            imgProvider = new Cesium.MapboxImageryProvider(options);
                        } else {
                            console.warn('MapboxImageryProvider:options.mapId is not defined');
                        }
                        break;
                    case 'openstreet':
                        var key = (Cesium.defined(options.key) && options.key !== '') ? options.key : undefined;
                        options.key = key;
                        imgProvider = new Cesium.createOpenStreetMapImageryProvider(options);
                        break;
                    case 'googlemap':
                        options.key = (Cesium.defined(options.key) && options.key !== '') ? options.key : undefined;
                        options.maptype = Cesium.defaultValue(options.maptype, options.layer);
                        if (Cesium.defined(options.maptype) && options.maptype !== '') {
                            imgProvider = new Cesium.GoogleMapsImageryProvider(options);
                        } else {
                            console.warn('GoogleMapsImageryProvider:options.maptype is not defined');
                        }
                        break;
                    case 'image':
                        options.url = (Cesium.defined(options.url) && options.url !== '') ? options.url : undefined;
                        if (Cesium.defined(options.url)) {
                            imgProvider = new Cesium.SingleTileImageryProvider(options);
                        } else {
                            console.warn('SingleTileImageryProvider:options.url is not defined');
                        }
                        break;
                    case 'overlayimage':
                        options.url = (Cesium.defined(options.url) && options.url !== '') ? options.url : undefined;
                        if (Cesium.defined(options.url)) {
                            imgProvider = new Cesium.OverlayImageryProvider(options);
                        } else {
                            console.warn('OverlayImageryProvider:options.url is not defined');
                        }
                        break;
                    case 'amaps':
                        options.key = (Cesium.defined(options.key) && options.key !== '') ? options.key : undefined;
                        options.maptype = Cesium.defaultValue(options.maptype, options.layer);
                        if (Cesium.defined(options.maptype) && options.maptype !== '') {
                            imgProvider = new Cesium.AMapsImageryProvider(options);
                        } else {
                            console.warn('AMapsImageryProvider:options.maptype is not defined');
                        }
                        break;
                    case 'qqmaps':
                        options.key = (Cesium.defined(options.key) && options.key !== '') ? options.key : undefined;
                        options.maptype = Cesium.defaultValue(options.maptype, options.layer);
                        if (Cesium.defined(options.maptype) && options.maptype !== '') {
                            imgProvider = new Cesium.QQMapsImageryProvider(options);
                        } else {
                            console.warn('QQMapsImageryProvider:options.maptype is not defined');
                        }
                        break;
                    case 'baidumaps':
                        options.mapStyle = Cesium.defaultValue(options.maptype, options.layer);
                        if (Cesium.defined(options.maptype) && options.maptype !== '') {
                            imgProvider = new Cesium.BaiduMapsImageryProvider(options);
                        } else {
                            console.warn('BaiduMapsImageryProvider:options.maptype is not defined');
                        }
                        break;
                    case 'arcgismapserver':
                        options.token = (Cesium.defined(options.token) && options.token !== '') ? options.token : undefined;
                        options.layers = (Cesium.defined(options.layers) && options.layers !== '') ? options.layers : undefined;
                        if (Cesium.defined(options.url) && options.url !== '') {
                            if(options.layerDefs) {
                                options.url+=`?layerDefs={0: \"FJID ='${options.layerDefs}'\"}`;
                            }
                            if(options.layerDefs2) {
                                options.url+=`?layerDefs={0: \"XMID ='${options.layerDefs2}'\"}`;
                            }
                            imgProvider = new Cesium.Kq3dArcGISMapServerImageryProvider(options);
                        } else {
                            console.warn('Kq3dArcGISMapServerImageryProvider:options.url is not defined');
                        }
                        break;
                    case 'kqgismapserver':
                        options.accessKey = (Cesium.defined(options.accessKey) && options.accessKey !== '') ? options.accessKey : undefined;
                        options.layers = (Cesium.defined(options.layers) && options.layers !== '') ? options.layers : undefined;
                        options.enablePickFeatures = Cesium.defaultValue(options.enablePickFeatures, false);
                        if (Cesium.defined(options.url) && options.url !== '') {
                            options.url += '?ua_token=' + options.accessKey;
                            imgProvider = new Cesium.Kq3dKQGISMapServerImageryProvider(options);
                        } else {
                            console.warn('Kq3dKQGISMapServerImageryProvider:options.url is not defined');
                        }
                        break;
                    case 'kqgis3dserver':
                        if (Cesium.defined(options.url) && options.url !== '') {
                            imgProvider = new Cesium.KQGIS3DServerImageryProvider(options);
                        } else {
                            console.warn('KQGIS3DServerImageryProvider:options.url is not defined');
                        }
                        break;
                    case 'kqgis3dtilefile':
                        if (Cesium.defined(options.url) && options.url !== '') {
                            imgProvider = new Cesium.KQGIS3DTileFileImageryProvider(options);
                        } else {
                            console.warn('KQGIS3DTileFileImageryProvider:options.url is not defined');
                        }
                        break;
                    case 'ogcwms':

                        if (Cesium.defined(options.url) && options.url !== '') {
                            imgProvider = new Cesium.WebMapServiceImageryProvider(options);
                        } else {
                            console.warn('WebMapServiceImageryProvider:options.url is not defined');
                        }
                        break;
                    case 'ogcwmts':
                        options.accessKey = (Cesium.defined(options.accessKey) && options.accessKey !== '') ? options.accessKey : undefined;
                        if (Cesium.defined(options.url) && options.url !== '') {
                            options.url += '?ua_token=' + options.accessKey;
                            imgProvider = new Cesium.WebMapTileServiceImageryProvider(options);
                        } else {
                            console.warn('WebMapTileServiceImageryProvider:options.url is not defined');
                        }
                        break;
                    default:
                        break;
                }
                if (imgProvider)
                    imgProvider._name = options.name;
            } catch (e) {
                console.warn(e.message);
            }

            //是否是基础图层 基础图层不允许删除
            var isBasic = Cesium.defaultValue(options.isBasic, false);
            imgProvider._isBasicLayer = isBasic;

            return imgProvider;
        },

        /**
         * 创建3DTileset对象
         *
         * @param  {Object} options 3DTileset对象配置
         * @return {Cesium.Cesium3DTileset} 3DTileset对象
         */
        createCesium3DTileset: function (options) {
            var Cesium = this.Cesium; 
            var tileset = undefined;
            var mobileMode = /[\?&]m$/.test(location.href) || !Cesium.FeatureDetection.isPCBrowser();
            if (Cesium.defined(options.url) && options.url != '') {
                var maximumMemoryUsage = Cesium.defaultValue(options.maximumMemoryUsage, 128),
                    maximumScreenSpaceError = Cesium.defaultValue(options.maximumScreenSpaceError, undefined),
                    foveatedConeSize = Cesium.defaultValue(options.foveatedConeSize, 0.4);
                options.immediatelyLoadDesiredLevelOfDetail = mobileMode;
                options.maximumMemoryUsage = mobileMode ? 0 : maximumMemoryUsage; // 512
                options.maximumScreenSpaceError = mobileMode ? 32 : maximumScreenSpaceError;
                options.foveatedConeSize = mobileMode ? 0.1 : foveatedConeSize; // 0.1
                //光照因子
                options.imageBasedLightingFactor = Cesium.defined(options.lightingFactor) ? new Cesium.Cartesian2(options.lightingFactor, options.lightingFactor) : undefined;
                tileset = new Cesium.Cesium3DTileset(options);
                this.set3DTilesLayerOtherProperties(tileset, options);
                tileset.__options = options;
            }
            return tileset;
        },

        //根据配置加载模型数据
        createCesium3DTilesetAsyn: function (options) {
            var Cesium = this.Cesium;
            var tileset = undefined;
            var that = this;
            //var mobileMode = /[\?&]m$/.test(location.href) || !Cesium.FeatureDetection.isPCBrowser();
            var ppss = new Promise(function (resolve0, reject0) {
                if (options.isKq3dServer && !Cesium.defined(options.dataclassId)) {
                    var request = new Cesium.KQGIS3DServerRequest({
                        url: options.url
                    });
                    var ps = request.getDatasetInfoByName(options.workspaceName, 1, options.datasetType);
                    var reqPromise = new Promise(function (resolve, reject) {
                        ps.then(function (ret) {
                            var datasetId = -1;
                            var dataclassId = -1;
                            datasetId = ret[0].id;
                            if (datasetId == -1)
                                reject();
                            request.getDatasetInfo(datasetId).then(function (ret2) {
                                if (ret2.error)
                                    reject();
                                ret2.dataclasses.forEach(function (item) {
                                    if (item.name == options.dataclassName && item.type == options.dataclassType) {
                                        dataclassId = item.id;
                                        return;
                                    }
                                });
                                resolve(dataclassId);
                            })
                        });
                    });

                    reqPromise.then(function (id) {
                        options.dataclassId = id;
                        var tileset = that.createCesium3DTileset(options);
                        resolve0(tileset);
                    }, function () {
                        reject0();
                    });
                } else {
                    var tileset = that.createCesium3DTileset(options);
                    resolve0(tileset);
                }
            });
            return ppss;
        },

        /**
         * 通过数据的url地质创建
         * @param {String} url 数据的url地址,会带有一些额外的参数,具体参数《数据解析 路径格式定义》
         * @param {Cesium.Viewer}viewer
         * @returns {Promise} 创建图层的状态
         *
         * @example
         *     var url = "http://192.168.101.121:9001/Data/json/china/shouduxingzhengzhongxin.json?datatype=geojson";
         *     var ps = kqWeb3d.createLayerByUrlString( url,viewer);
         *     ps.then(function(ret){
         *          //成功
         *          var type = ret.type,
         *              layer = ret.layer,
         *              layerType = ret.layerType;
         *     },function(ret){
         *          //失败
         *
         *      }).catch(function(e){
         *          //异常
         *      });
         *
         */
        createLayerByUrlString: function (url, viewer) {
            var Cesium = this.Cesium;
            var ret = {
                type: undefined,
                layerType: undefined,
                layer: undefined
            };
            var that = this;
            //url = "http://192.168.101.121:9001/Data/json/china/shouduxingzhengzhongxin.json?datatype=geojson";
            var ps = new Promise(function (resolve, reject) {
                try {
                    var pURL = new URL(url);
                    var searchParams = pURL.searchParams;
                    if (searchParams.get('listen')) {
                        var newOrigin = pURL.origin.replace('8888', '{s}');
                        url = newOrigin + pURL.pathname;
                    } else {
                        url = pURL.origin + pURL.pathname;
                    }

                    var datatype = searchParams.get('datatype');
                    if (datatype) {
                        datatype = datatype.toLocaleLowerCase();
                    }
                    ret.type = datatype;
                    var name = searchParams.get('name');
                    ret.name = name;
                } catch (error) {
                    resolve(ret);
                }
                if (datatype == 'imagery') {
                    var options = {};
                    options.url = url;
                    options.name = name;
                    options.proxy = searchParams.get('proxy') || undefined;
                    options.key = searchParams.get('key') || undefined;
                    options.token = searchParams.get('ua_token') || undefined;
                    options.accessKey = searchParams.get('ua_token') || undefined;
                    options.type = searchParams.get('type') || undefined;
                    options.mapStyle = searchParams.get('mapstyle') || undefined;
                    options.mapId = searchParams.get('mapid') || undefined;
                    options.layer = searchParams.get('layer') || undefined;
                    options.layers = searchParams.get('layers') || undefined;
                    options.workspaceName = searchParams.get('workspacename') || undefined;
                    options.rasterDatasetName = searchParams.get('rasterdatasetName') || undefined;
                    options.maximumLevel = searchParams.get('maximumlevel') || undefined;
                    options.minimumLevel = searchParams.get('minimumLevel') || undefined;
                    options.brightness = searchParams.get('brightness');
                    options.layerDefs=searchParams.get('layerDefs')
                    options.layerDefs2=searchParams.get('layerDefs2')
                    //options.visible = searchParams.get('visible');
                    var reverse = searchParams.get('reverse');
                    reverse = (reverse == 'true' || reverse == '1') ? true : undefined;
                    options.reverse = reverse;
                    var autoIgnoreBlackEdge = searchParams.get('autoignoreblackedge');
                    autoIgnoreBlackEdge = (autoIgnoreBlackEdge == 'true' || autoIgnoreBlackEdge == '1') ? true : undefined;
                    options.autoIgnoreBlackEdge = autoIgnoreBlackEdge;
                    options.rectangleQuad = (searchParams.get('rectanglequad')) ? eval('(' + searchParams.get('rectanglequad') + ')')/*JSON.parse(searchParams.get('rectanglequad'))*/ : undefined;
                    //wms服务
                    var parameters = searchParams.get('parameters') || undefined;
                    if (parameters && typeof parameters == 'string') {
                        try {
                            options.parameters = eval('(' + parameters + ')');//JSON.parse(parameters);
                            options.parameters.FORMAT = Cesium.defaultValue(options.parameters.FORMAT, 'image/png');
                            options.parameters.TRANSPARENT = Cesium.defaultValue(options.parameters.TRANSPARENT, true);
                            options.parameters.STYLES = Cesium.defaultValue(options.parameters.STYLES, '');
                            options.subdomains = Cesium.defaultValue(options.parameters.listen, []);
                        } catch (error) { }
                        var listen = searchParams.get('listen') || '';
                        options.subdomains = listen.split(',');
                    }
                    //采用系统强制默认坐标系
                    options.srs = (sceneForceDefaultEPSG) ? sceneForceDefaultEPSG : Cesium.defaultValue(searchParams.get('SRS'), undefined);
                    options.crs = Cesium.defaultValue(searchParams.get('CRS'), undefined);
                    options.rectangle = undefined;
                    var rect = searchParams.get('rect');
                    if (typeof rect == 'string') {
                        try {
                            var bboxes = rect.split(',');
                            options.rectangle = new Cesium.Rectangle(Cesium.Math.toRadians(bboxes[0]), Cesium.Math.toRadians(bboxes[1]),
                                Cesium.Math.toRadians(bboxes[2]), Cesium.Math.toRadians(bboxes[3]));
                        } catch (error) { }
                    }
                    var bbox = searchParams.get('bbox');
                    if (typeof bbox == 'string') {
                        try {
                            var bboxes = bbox.split(',');
                            options.rectangle = new Cesium.Rectangle(Cesium.Math.toRadians(bboxes[0]), Cesium.Math.toRadians(bboxes[1]),
                                Cesium.Math.toRadians(bboxes[2]), Cesium.Math.toRadians(bboxes[3]));
                        } catch (error) { }
                    }

                    if (options.srs && options.srs.indexOf('4490') > -1) {
                        options.ellipsoid = cgs2000Ellipsolid;
                    }
                    //wmts
                    options.format = searchParams.get('format') || 'image/jpeg';
                    options.style = searchParams.get('style') || 'default';
                    options.tileMatrixSetID = searchParams.get('tileMatrixSetID') || 'GetTileMatrix';
                    if(window.KQFrame.Configer.tilingSchemeType === 'Geographic'){  // 经纬度的
                       options.tilingScheme = new Cesium.GeographicTilingScheme(); // 经纬度
                       options.tileMatrixLabels = searchParams.get('tileMatrixLabels') || undefined;
                    }
                    options.token = searchParams.get('token') || undefined;
                    try {
                        options.tileMatrixLabels = options.tileMatrixLabels ? options.tileMatrixLabels.split(',') : undefined;
                    } catch (e) { }

                    var provider = that.createMapProvider(options);
                    if(options.layerDefs)
                        provider._layerDefs=options.layerDefs;
                    if (options.token) {
                        provider._resource.setQueryParameters({ 'token': options.token });
                        provider._resource.setTemplateValues({ 'token': options.token });
                    }
                    ret.layer = viewer.imageryLayers.addImageryProvider(provider);
                    ret.layerType = 'ImageryLayer';
                    ret.layer.show = false;
                    ret.layer.name = name;
                    resolve(ret);
                } else if (datatype == 'terrain') {
                    var options = {};
                    options.url = url;
                    var type = searchParams.get('type');
                    if (type == 'stk') {
                        options.url = options.url.replace('layer.json', '');
                        var requestVertexNormals = searchParams.get('requestvertexnormals'),
                            requestWaterMask = searchParams.get('requestwatermsk'),
                            requestMetadata = searchParams.get('requestmetadata');
                        options.requestVertexNormals = (requestVertexNormals == 'false' || requestVertexNormals == '0') ? false : true;
                        options.requestWaterMask = (requestWaterMask == 'true' || requestWaterMask == '1') ? true : false;
                        options.requestMetadata = (requestMetadata == 'false' || requestMetadata == '0') ? false : true;
                        ret.layer = new Cesium.CesiumTerrainProvider(options);
                        ret.layerType = 'CesiumTerrainProvider';

                    } else if (type == 'kqgis3dserver') {
                        options.rasterDatasetId = searchParams.get('rasterdatasetid');
                        options.workspaceName = searchParams.get('workspacename');
                        options.rasterDatasetName = searchParams.get('rasterdatasetname');
                        options.name = searchParams.get('name');
                        if ((Cesium.defined(options.rasterDatasetId) && options.rasterDatasetId != '') ||
                            (Cesium.defined(options.workspaceName) && options.workspaceName != '' &&
                                Cesium.defined(options.rasterDatasetName) && options.rasterDatasetName != '')) {
                            ret.layer = new Cesium.KQGIS3DServerTerrainProvider(options);
                            ret.layerType = 'KQGIS3DServerTerrainProvider';
                        }
                    } else if (type == 'kqgis3dtilefile') {
                        options.name = searchParams.get('name');
                        options.proxy = searchParams.get('proxy');
                        ret.layer = new Cesium.KQGIS3DTileFileTerrainProvider(options);
                        ret.layerType = 'KQGIS3DTileFileTerrainProvider';
                    }
                    resolve(ret);
                } else if (datatype == 'geojson') {
                    var opts = {
                        polygon: {
                            material: Cesium.Color.fromCssColorString('rgba(0,255,0,0.3)'),
                            outline: true,
                            outlineWidth: 2,
                            outlineColor: Cesium.Color.YELLOW,
                            classificationType: Cesium.ClassificationType.TERRAIN
                        },
                        polyline: {
                            width: 2,
                            material: Cesium.Color.YELLOW,
                            classificationType: Cesium.ClassificationType.TERRAIN
                        },
                        label: {
                            express: 'name',
                            //where: '$NAME.indexOf("医院")>-1', //满足条件的才显示 js代码
                            font: '25px 楷体',
                            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                            outlineWidth: 3.0,
                            fillColor: Cesium.Color.WHITE,
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            disableDepthTestDistance: Number.MAX_VALUE,//5e6,
                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(50000, 2e6),
                            scaleByDistance: new Cesium.NearFarScalar(1000, 1.0, 5e6, 0.95),
                            heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                        }
                    };
                    Cesium.GeoJsonExtendDataSource.load(url, opts).then(function (dataSource) {
                        dataSource.show = false;
                        ret.layer = dataSource;
                        ret.layerType = 'GeoJsonDataSource';
                        viewer.dataSources.add(dataSource);
                        resolve(ret);
                    });
                } else if (datatype == 'kml') {
                    Cesium.KmlDataSource.load(url, {}).then(function (dataSource) {
                        dataSource.show = false;
                        ret.layer = dataSource;
                        ret.layerType = 'KmlDataSource';
                        viewer.dataSources.add(dataSource);
                        resolve(ret);
                    });
                } else if (datatype == 'czml') {
                    Cesium.CzmlDataSource.load(url, {}).then(function (dataSource) {
                        dataSource.show = false;
                        ret.layer = dataSource;
                        ret.layerType = 'KmlDataSource';
                        viewer.dataSources.add(dataSource);
                        resolve(ret);
                    });
                } else if (datatype == '3dtiles') {
                    var options = {};
                    options.url = url;
                    options.name = searchParams.get('name');
                    var isKq3dServer = searchParams.get('iskq3dserver');
                    isKq3dServer = (isKq3dServer == 'true' || isKq3dServer == '1') ? true : false;
                    options.isKq3dServer = isKq3dServer;
                    options.dataclassId = searchParams.get('dataclassid');
                    options.workspaceName = searchParams.get('workspacename');
                    options.datasetName = searchParams.get('datasetname');
                    options.dataclassName = searchParams.get('dataclassname');
                    options.dataclassType = "cesium3dtile";
                    options.ua_token = searchParams.get('ua_token');
                    // 有token必须添加
                    if(options.ua_token && options.ua_token !== ''){
                        options.url = url+= '?ua_token='+options.ua_token;
                    }

                    var position = searchParams.get('position');
                    try {
                        position = eval('(' + position + ')');//JSON.parse(position)
                        options.position = position;
                    } catch (e) { }
                    var style = searchParams.get('style');
                    try {
                        style = eval('(' + style + ')'); //JSON.parse(style);
                        options.style = style;
                    } catch (e) { }

                    var offsetZ = searchParams.get('offsetz');
                    if (offsetZ !== null && offsetZ !== '' && offsetZ !== undefined && !isNaN(offsetZ)) {
                        options.offsetZ = Number(offsetZ);
                    }
                    var heading = searchParams.get('heading');
                    if (heading !== null && heading !== '' && heading !== undefined && !isNaN(heading)) {
                        options.heading = Number(heading);
                    }
                    var shadows = searchParams.get('shadows');
                    if (shadows !== null && shadows !== '' && shadows !== undefined && !isNaN(shadows)) {
                        options.shadows = parseInt(shadows);
                    }
                    var pss = that.add3DTilesetLayer(viewer, options);
                    pss.then(function (tileset) {
                        tileset.show = false;
                        ret.layer = tileset;
                        ret.layerType = 'Cesium3DTileset';
                        resolve(ret);
                    });
                } else if (datatype == 'mongo3dtiles') {
                    var options = {};
                    options.url = url;
                    options.name = searchParams.get('name');
                    options.layerId = searchParams.get('layerId');
                    var isKq3dServer = searchParams.get('iskq3dserver');
                    var tileset = gViewer.scene.primitives.add(new Cesium.Cesium3DTileset({
                        name: options.name,
                        url :options.url,
                        isKq3dServer: true,
                        layerId: options.layerId //默认从0，1，2，3，4挨个试
                    }));
                    tileset.show = false;
                    ret.layer = tileset;
                    ret.layerType = 'Cesium3DTileset';
                    resolve(ret);
                }
                else {
                    resolve(ret);
                }
            });

            return ps;
        },

        /**
         * 根据高度自动隐藏
         */
        autoHideMapLayerByHeight: function (viewer, autohiddenmaps) {
            /*"autohiddenmaps": {
                "description": "按照高度自动隐藏的显示图层",
                "list": [{
                    "name": "中国地图午夜蓝板(ArcGISServer)",
                    "maxHeight": 1e32,
                    "minHeight": 5000
                }]
            }*/
            var maps = autohiddenmaps.list;
            if (maps instanceof Array && maps.length > 0) {
                var imageryLayers = viewer.imageryLayers,
                    len = imageryLayers.length;
                var mapNames = [];
                maps.forEach(function (map, key) {
                    var name = map.name;
                    mapNames.push(name);
                });
                var hiddens = [];
                for (var i = 0; i < len; i++) {
                    var imageryLayer = imageryLayers.get(i);
                    var name = imageryLayer._imageryProvider._name;
                    var idx = mapNames.indexOf(name);
                    if (idx > -1) {
                        hiddens.push({
                            maxVisibleHeight: maps[idx].maxVisibleHeight,
                            minVisibleHeight: maps[idx].minVisibleHeight,
                            imageryLayer: imageryLayer
                        });
                    }
                }
                if (hiddens.length == 0)
                    return;
                viewer.camera.moveEnd.addEventListener(function () {
                    var height = viewer.camera._positionCartographic.height;
                    hiddens.forEach(function (map, key) {
                        var maxVisibleHeight = map.maxVisibleHeight,
                            minVisibleHeight = map.minVisibleHeight;
                        if (height >= minVisibleHeight && height <= maxVisibleHeight) {
                            if (!map.imageryLayer.show)
                                map.imageryLayer.show = true;
                        } else {
                            if (map.imageryLayer.show)
                                map.imageryLayer.show = false;
                        }
                    });
                });
            }
        },

        /**
         * 飞到某点(世界坐标)
         *
         * @param  {Cesium.camera} camera 三维相机对象.
         * @param  {Cesium.Cartesian3} target 定位中心点.
         * @param  {Double} heading 相机朝向角（度）.
         * @param  {Double} pitch 相机翻转角（度）.
         * @param  {Double} duration 飞跃时间.
         */
        flyToCartesian3: function (camera, target, heading, pitch, roll, duration) {
            var heading = Cesium.defaultValue(heading, 0),
                pitch = Cesium.defaultValue(pitch, -90),
                roll = Cesium.defaultValue(roll, 0),
                duration = Cesium.defaultValue(duration, 1.5);
            if (target instanceof Cesium.Cartesian3) {
                camera.flyTo({
                    destination: target,
                    orientation: {
                        heading: Cesium.Math.toRadians(heading),
                        pitch: Cesium.Math.toRadians(pitch),
                        roll: Cesium.Math.toRadians(roll)
                    },
                    duration: duration
                });
            }
        },
        /**
         * 飞到某点(经纬度)
         *
         * @param  {Cesium.camera} camera 三维相机对象.
         * @param  {Double} lon 定位中心点经度.
         * @param  {Double} lat 定位中心点纬度.
         * @param  {Double} height 定位中心点高度.
         * @param  {Double} heading 相机朝向角（度）.
         * @param  {Double} pitch 相机翻转角（度）.
         * @param  {Double} duration 飞跃时间.
         */
        flyToDegrees: function (camera, lon, lat, height, heading, pitch, duration) {
            var lon = Cesium.defaultValue(lon, undefined),
                lat = Cesium.defaultValue(lat, undefined),
                height = Cesium.defaultValue(height, undefined),
                heading = Cesium.defaultValue(heading, 0),
                pitch = Cesium.defaultValue(pitch, -90),
                roll = Cesium.defaultValue(roll, 0),
                duration = Cesium.defaultValue(duration, 1.5);
            if (Cesium.defined(lon) && Cesium.defined(lat) && Cesium.defined(height)) {
                camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
                    orientation: {
                        heading: Cesium.Math.toRadians(heading),
                        pitch: Cesium.Math.toRadians(pitch),
                        roll: Cesium.Math.toRadians(roll)
                    },
                    duration: duration
                });
            }
        },
        /**
         * 相机飞到某个视角
         * @param {Array} view 视角信息数组
         */
        flyToView: function (view) {
            if (view instanceof Array && view.length >= 3) {
                gViewer.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(view[0], view[1], view[2]), // 设置位置
                    orientation: {
                        heading: Cesium.Math.toRadians(view[3] || 0), // 方向
                        pitch: Cesium.Math.toRadians(view[4] || -90), // 倾斜角度
                        roll: 0
                    },
                    duration: 1.5,
                });
            }
        },
        /**
         * 定位到某点(世界坐标系)
         *
         * @param  {Cesium.camera} camera 三维相机对象.
         * @param  {Cesium.Cartesian3} target 定位中心点.
         * @param  {Double} heading 相机朝向角（度）.
         * @param  {Double} pitch 相机翻转角（度）.
         * @param  {Double} range 相机距离中心点的距离.
         */
        lookAtCartesian3: function (camera, target, heading, pitch, range) {
            var Cesium = this.Cesium;
            var offset = undefined;
            if (Cesium.defined(range)) {
                heading = Cesium.defaultValue(Cesium.Math.toRadians(heading), camera.heading);
                pitch = Cesium.defaultValue(Cesium.Math.toRadians(pitch), camera.pitch);
                offset = new Cesium.HeadingPitchRange(heading, pitch, range);
            }
            camera.lookAt(target, offset);
        },

        /**
         * 定位到某点(经纬度)
         *
         * @param  {Cesium.camera} camera 三维相机对象.
         * @param  {Double} lon 定位中心点经度.
         * @param  {Double} lat 定位中心点纬度.
         * @param  {Double} height 定位中心点高度.
         * @param  {Double} heading 相机朝向角（度）.
         * @param  {Double} pitch 相机翻转角（度）.
         * @param  {Double} range 相机距离中心点的距离.
         */
        lookAtDegrees: function (camera, lon, lat, height, heading, pitch, range) {
            var Cesium = this.Cesium;
            var target = Cesium.Cartesian3.fromDegrees(lon, lat, height);
            this.lookAtCartesian3(camera, target, heading, pitch, range);
        },

        /**
         * 定位到对象
         *
         * @param  {Cesium.Viewer} viewer 三维相机对象.
         * @param  {Cesium.Enity} target 定位中心点.
         * @param  {Double} heading 相机朝向角（度）.
         * @param  {Double} pitch 相机翻转角（度）.
         * @param  {Double} range 相机距离中心点的距离.
         */
        zoomTo: function (viewer, target, heading, pitch, range) {
            var Cesium = this.Cesium;
            var offset = undefined;
            if (Cesium.defined(range)) {
                heading = Cesium.defined(heading) ? Cesium.Math.toRadians(heading) : undefined;
                pitch = Cesium.defined(pitch) ? Cesium.Math.toRadians(pitch) : undefined;
                heading = Cesium.defaultValue(heading, viewer.camera.heading);
                pitch = Cesium.defaultValue(pitch, viewer.camera.pitch);
                offset = new Cesium.HeadingPitchRange(heading, pitch, range);
            }

            viewer.zoomTo(target, offset);
        },

        /**
         * 缩放
         * @param  {Cesium.Viewer|Cesium.Widget} viewer
         * @param  {Boolean} zoomIn 是否放大
         */
        zoom: function (viewer, zoomIn) {
            var Cesium = this.Cesium;
            var cartesian3Scratch = new Cesium.Cartesian3();
            var relativeAmount = 2;
            if (zoomIn) {
                relativeAmount = 1 / relativeAmount;
            }
            //viewer.analytics.logEvent('navigation', 'click', 'zoomIn');
            //this.isActive = true;
            if (Cesium.defined(viewer)) {
                var scene = viewer.scene;
                var sscc = scene.screenSpaceCameraController;
                // do not zoom if it is disabled
                if (!sscc.enableInputs || !sscc.enableZoom) {
                    return;
                }
                // TODO
                // if(scene.mode == SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
                //    return;
                // }
                var camera = scene.camera;
                var orientation;
                switch (scene.mode) {
                    case Cesium.SceneMode.MORPHING:
                        break;
                    case Cesium.SceneMode.SCENE2D:
                        camera.zoomIn(camera.positionCartographic.height * (1 - relativeAmount));
                        break;
                    default:
                        var focus;
                        if (Cesium.defined(viewer.trackedEntity)) {
                            focus = new Cesium.Cartesian3();
                        } else {
                            focus = this.getCameraFocus(viewer, false);
                        }

                        if (!Cesium.defined(focus)) {
                            // Camera direction is not pointing at the globe, so use the ellipsoid horizon point as
                            // the focal point.
                            var ray = new Cesium.Ray(camera.worldToCameraCoordinatesPoint(scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)), camera.directionWC);
                            focus = IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid);

                            orientation = {
                                heading: camera.heading,
                                pitch: camera.pitch,
                                roll: camera.roll
                            };
                        } else {
                            orientation = {
                                direction: camera.direction,
                                up: camera.up
                            };
                        }

                        var direction = Cesium.Cartesian3.subtract(camera.position, focus, cartesian3Scratch);
                        var movementVector = Cesium.Cartesian3.multiplyByScalar(direction, relativeAmount, direction);
                        var endPosition = Cesium.Cartesian3.add(focus, movementVector, focus);

                        if (Cesium.defined(viewer.trackedEntity) || scene.mode == Cesium.SceneMode.COLUMBUS_VIEW) {
                            // sometimes flyTo does not work (jumps to wrong position) so just set the position without any animation
                            // do not use flyTo when tracking an entity because during animatiuon the position of the entity may change
                            camera.position = endPosition;
                        } else {
                            camera.flyTo({
                                destination: endPosition,
                                orientation: orientation,
                                duration: 0.5,
                                convert: false
                            });
                        }
                }
            }
        },

        /**
         * gets the focus point of the camera
         * @param {Viewer|Widget} viewer The viewer
         * @param {boolean} inWorldCoordinates true to get the focus in world coordinates, otherwise get it in projection-specific map coordinates, in meters.
         * @param {Cartesian3} [result] The object in which the result will be stored.
         * @return {Cartesian3} The modified result parameter, a new instance if none was provided or undefined if there is no focus point.
         */
        getCameraFocus: function (viewer, inWorldCoordinates, result) {
            var Cesium = this.Cesium;
            var unprojectedScratch = new Cesium.Cartographic();
            var rayScratch = new Cesium.Ray();
            var scene = viewer.scene;
            var camera = scene.camera;

            if (scene.mode == Cesium.SceneMode.MORPHING) {
                return undefined;
            }

            if (!Cesium.defined(result)) {
                result = new Cesium.Cartesian3();
            }

            // TODO bug when tracking: if entity moves the current position should be used and not only the one when starting orbiting/rotating
            // TODO bug when tracking: reset should reset to default view of tracked entity

            if (Cesium.defined(viewer.trackedEntity)) {
                result = viewer.trackedEntity.position.getValue(viewer.clock.currentTime, result);
            } else {
                rayScratch.origin = camera.positionWC;
                rayScratch.direction = camera.directionWC;
                result = scene.globe.pick(rayScratch, scene, result);
            }

            if (!Cesium.defined(result)) {
                return undefined;
            }

            if (scene.mode == Cesium.SceneMode.SCENE2D || scene.mode == Cesium.SceneMode.COLUMBUS_VIEW) {
                result = camera.worldToCameraCoordinatesPoint(result, result);

                if (inWorldCoordinates) {
                    result = scene.globe.ellipsoid.cartographicToCartesian(scene.mapProjection.unproject(result, unprojectedScratch), result);
                }
            } else {
                if (!inWorldCoordinates) {
                    result = camera.worldToCameraCoordinatesPoint(result, result);
                }
            }

            return result;
        },

        startKeyHandler: function (viewer) {
            var scene = viewer.scene;
            var canvas = viewer.canvas;
            canvas.setAttribute('tabindex', '0'); // needed to put focus on the canvas
            canvas.onclick = function () {
                canvas.focus();
            };
            var ellipsoid = scene.globe.ellipsoid;

            // disable the default event handlers
            /*scene.screenSpaceCameraController.enableRotate = false;
            scene.screenSpaceCameraController.enableTranslate = false;
            scene.screenSpaceCameraController.enableZoom = false;
            scene.screenSpaceCameraController.enableTilt = false;
            scene.screenSpaceCameraController.enableLook = false;*/

            var startMousePosition;
            var mousePosition;
            var flags = {
                looking: false,
                moveForward: false,
                moveBackward: false,
                moveUp: false,
                moveDown: false,
                moveLeft: false,
                moveRight: false
            };
            var isDraging = false; //标识是否正在拖拽 翻转 移动相机位置
            var handler = new Cesium.ScreenSpaceEventHandler(canvas);

            handler.setInputAction(function (movement) {
                flags.looking = true;
                mousePosition = startMousePosition = Cesium.Cartesian3.clone(movement.position);
            }, Cesium.ScreenSpaceEventType.LEFT_DOWN);

            handler.setInputAction(function (movement) {
                mousePosition = movement.endPosition;
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

            handler.setInputAction(function (position) {
                flags.looking = false;
            }, Cesium.ScreenSpaceEventType.LEFT_UP);

            function getFlagForKeyCode(keyCode) {
                switch (keyCode) {
                    case 'W'.charCodeAt(0):
                        return 'moveForward';
                    case 'S'.charCodeAt(0):
                        return 'moveBackward';
                    case 'Q'.charCodeAt(0):
                        return 'moveUp';
                    case 'E'.charCodeAt(0):
                        return 'moveDown';
                    case 'D'.charCodeAt(0):
                        return 'moveRight';
                    case 'A'.charCodeAt(0):
                        return 'moveLeft';
                    default:
                        return undefined;
                }
            }

            viewer.scene.canvas.addEventListener('keydown', function (e) {
                var flagName = getFlagForKeyCode(e.keyCode);
                if (typeof flagName !== 'undefined') {
                    flags[flagName] = true;
                }
            }, false);

            viewer.scene.canvas.addEventListener('keyup', function (e) {
                var flagName = getFlagForKeyCode(e.keyCode);
                if (typeof flagName !== 'undefined') {
                    flags[flagName] = false;
                }
            }, false);

            viewer.clock.onTick.addEventListener(function (clock) {
                //return;
                var camera = viewer.camera;

                if (flags.looking) {
                    //影响整体交互暂时先屏蔽掉这段代码
                    return;
                    var width = canvas.clientWidth;
                    var height = canvas.clientHeight;

                    // Coordinate (0.0, 0.0) will be where the mouse was clicked.
                    var x = (mousePosition.x - startMousePosition.x) / width;
                    var y = -(mousePosition.y - startMousePosition.y) / height;

                    var lookFactor = 0.05;
                    camera.lookRight(x * lookFactor);
                    camera.lookUp(y * lookFactor);

                } else {

                }

                // Change movement speed based on the distance of the camera to the surface of the ellipsoid.
                var cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
                var moveRate = cameraHeight / 100.0;

                if (flags.moveForward) {
                    camera.moveForward(moveRate);
                }
                if (flags.moveBackward) {
                    camera.moveBackward(moveRate);
                }
                if (flags.moveUp) {
                    camera.moveUp(moveRate);
                }
                if (flags.moveDown) {
                    camera.moveDown(moveRate);
                }
                if (flags.moveLeft) {
                    camera.moveLeft(moveRate);
                }
                if (flags.moveRight) {
                    camera.moveRight(moveRate);
                }
            });
        },

        /**
         * 创建geojson对象
         *
         * @param  {Object} options GeoJsonExtendDataSource对象配置
         * @return {Cesium.GeoJsonExtendDataSource} GeoJsonExtendDataSource对象
         */
        createGeoJsonExtendIcons(url, options, callback) {
            var loadPromise = gViewer.dataSources.add(Cesium.Kq3dGeoJsonDataSource.load(url, options));
            loadPromise.then(function (dataSource) {
                //加载成功，返回 dataSource
                callback(dataSource)
            }, function (error) {
                //失败
                console.log('error');
            });
        },
        lookAt(x, y, z) {
            let center = Cesium.Cartesian3.fromDegrees(x, y, z)
            let heading = Cesium.Math.toRadians(50.0);
            let pitch = Cesium.Math.toRadians(-20.0);
            let range = 5000;
            gViewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, range));
        },
        flyTo(x, y, z) {
            gViewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(x, y, z), // 设置位置
                // orientation:
                // {   heading : Cesium.Math.toRadians(50.0), // 方向
                //     pitch :Cesium.Math.toRadians(-20.0),// 倾斜角度
                //     roll : 0
                // },
                duration: 5, // 设置飞行持续时间，默认会根据距离来计算
                // complete: function () { // 到达位置后执行的回调函数
                //     console.log('到达目的地');
                // },
                // cancle: function () { // 如果取消飞行则会调用此函数
                //     console.log('飞行取消')
                // },
                // pitchAdjustHeight: -90, // 如果摄像机飞越高于该值，则调整俯仰俯仰的俯仰角度，并将地球保持在视口中。
                // maximumHeight:5000, // 相机最大飞行高度
                // flyOverLongitude: 100, // 如果到达目的地有2种方式，设置具体值后会强制选择方向飞过这个经度
            });
        },
        //将世界坐标转换成经纬度坐标
        worldCoordinatesToLat(x, y, z) {
            var arr = [];
            var ellipsoid = gViewer.scene.globe.ellipsoid;
            var cartesian3 = new Cesium.Cartesian3(x, y, z);
            var cartographic = ellipsoid.cartesianToCartographic(cartesian3);
            var lat = Cesium.Math.toDegrees(cartographic.latitude); //经度
            var lng = Cesium.Math.toDegrees(cartographic.longitude); //纬度
            var alt = cartographic.height; //高度
            arr.push(lat);
            arr.push(lng);
            arr.push(alt);
            return arr
        },
        /**
         * 绘制线 geometry对象
         *
         * @param  posArr 线的经纬度坐标点 例如：[110.0,42,130.0,42,135.0,30]
         * @return width 线的宽度
         */
        darwLine(posArr, width) {
            var Cesium = this.Cesium;
            var primitive = new Cesium.Primitive({
                geometryInstances: new Cesium.GeometryInstance({
                    geometry: new Cesium.PolylineGeometry({
                        positions: Cesium.Cartesian3.fromDegreesArray(posArr),
                        width: width,
                        vertexFormat: Cesium.PolylineMaterialAppearance.VERTEX_FORMAT
                    })
                }),
                appearance: new Cesium.PolylineMaterialAppearance({
                    material: Cesium.Material.fromType('Color')
                })

            });
            gViewer.scene.primitives.add(primitive);
        },
        //根据经纬度创建点
        createPoint(x, y, z, width, color) {
            var entity = gViewer.entities.add({
                position: new Cesium.Cartesian3.fromDegrees(x, y, z),
                point: {
                    pixelSize: width,
                    color: color,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1e2, 1e7)
                    //disableDepthTestDistance: Number.POSITIVE_INFINITY
                }
            });
            // return entity;
        },
        //根据czml创建点
        createCZMLPoint(url, options, callback) {
            var Cesium = this.Cesium;
            var loadPromise = gViewer.dataSources.add(Cesium.CzmlDataSource.load(url, options));
            loadPromise.then(function (ds) {
                callback(ds);
            }, function (error) {
                //失败
                console.log('error');
            });
        },
        //移除绘制的datasource
        removeDataSource(dataSource) {
            if (dataSource) {
                gViewer.dataSources.remove(dataSource, true);
                dataSource = undefined;
            }
        },

        /**
         *
         * @param {GeoJson} geometry geojson格式
         * @param {Number} [height] 几何对象那个中心点高度
         * @param {Number} [heading] 朝向角
         * @param {Number} [pitch=] 俯仰角
         * @param {Number} [range=5000] 距离
         */
        lookAtGeometryCenter: function (geometry, height, heading, pitch, range) {
            //飞向
            var geometry = geometry;
            var center = Cesium.turf.center(geometry);
            var lon = center.geometry.coordinates[0],
                lat = center.geometry.coordinates[1];
            if (!Cesium.defined(height)) {
                var cartographic = Cesium.Cartographic.fromDegrees(lon, lat);
                height = gViewer.scene.globe.getHeight(cartographic);
                //console.log(height);
            }
            var transform = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(lon, lat, height || 0));
            var heading = Cesium.defined(heading) ? Cesium.Math.toRadians(heading) : gViewer.camera.heading;
            var pitch = Cesium.defined(pitch) ? Cesium.Math.toRadians(pitch) : gViewer.camera.pitch;
            var range = Cesium.defaultValue(range, 5000.0);
            gViewer.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(heading, pitch, range));
            gViewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        },
        addPolygonHierarchyOutline: function (dataSource, polygonHierarchy, outlineColor, outlineWidth) {
            var volume = new Cesium.PolylineVolumeGeometry({
                polylinePositions: polygonHierarchy,
                shapePositions: [
                    new Cesium.Cartesian2(-10000, -55000),
                    new Cesium.Cartesian2(10000, -55000),
                    new Cesium.Cartesian2(10000, 55000),
                    new Cesium.Cartesian2(-10000, 55000)
                ],
                cornerType: Cesium.CornerType.BEVELED,

            });
            // 定义 Geometry
            var geometry = Cesium.PolylineVolumeGeometry.createGeometry(volume);
            // 定义 GeometryInstance
            var instance = new Cesium.GeometryInstance({
                geometry: geometry,
                id: Math.random().toString(),
                attributes: {
                    // color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
                }
            });
            // Primitive加载
            var primitive = new Cesium.Primitive({
                geometryInstances: instance, // 多个instance组成的集合
                appearance: new Cesium.PolylineMaterialAppearance({
                    material: Cesium.Material.fromType('Color', {
                        color: Cesium.Color.fromCssColorString('#033882').withAlpha(0.6)
                        // color: Cesium.Color.fromCssColorString('rgba(200, 215, 238,0.7)')
                    })
                })
            });
            //
            dataSource._primitives.add(primitive);
            gViewer.scene.postProcessStages.fxaa.enabled = true;
            return primitive;
        },
        //创建道路线
         createSampleRoadLines:function(url) {
            var ps = new Promise(function (resolve, reject) {
                Cesium.Resource.fetchJson(url).then(function (data) {
                    var timeDuration = 2.0;
                    var moveBaseDuration = 0.1;
                    var hStep = 300 / (data.length - 1);
                    // var busLines = [].concat.apply([], data.map(function (busLine, idx) {
                    var lines = [];
                    data.features.map(function (feature, idx) {
                        // console.log(feature);
                        var coordinates = feature.geometry.coordinates;
                        var points = [];
                        coordinates.forEach(function (coordinate) {
                            var pt = Cesium.Cartesian3.fromDegrees(coordinate[0], coordinate[1], coordinate[2]);
                            // var pt = Cesium.Cartesian3.fromDegrees(118.33671, 29.72566, 8.0);
                            points.push(pt);
                        })
                        lines.push({
                            positions: points,
                            startTime: timeDuration * Math.random(),
                            duration: moveBaseDuration + 1.0 * Math.random()
                        });
                    });
                    var time = 0;
                    var disposeListener = gViewer.scene.preUpdate.addEventListener(function () {
                        time += 0.01;
                        if (time >= timeDuration) {
                            time = 0.0;
                        }
                    });
                    // 示例
                    // routePaths = [{
                    //     startPos: [116.3, 39.9],
                    //     endPos: [116.3, 35.9],
                    //     startTime: 0,
                    //     duration: 10.0,
                    // }];
                    var color = Cesium.Color.AQUA;
                    var linesPrimitives = Cesium.kq3dCreateODLinesPrimitive(lines, 4.0, color, function (instanceIndex, frameState) {
                        var st = lines[instanceIndex].startTime;
                        var dr = lines[instanceIndex].duration;
                        var diff = time > st ? time - st : time + timeDuration - st;
                        var timeRatio = Math.min(diff / dr, 1.0);
                        // Cesium.Cartesian4.fromElements(timeRatio, 0.3, 1.0, 1.0, result)
                        return timeRatio;
                    });
                    resolve(linesPrimitives);
                });
            });
            return ps;
        }

    };

    /*global self,module*/
    if (typeof window !== 'undefined') {
        if (window.Cesium)
            kqWeb3d.Cesium = window.Cesium;
        window.kqWeb3d = kqWeb3d;
    } else if (typeof self !== 'undefined') {
        if (self.Cesium)
            kqWeb3d.Cesium = self.Cesium;
        self.kqWeb3d = kqWeb3d;
    } else if (typeof module !== 'undefined') {

        module.exports = kqWeb3d;
    } else {
        console.log('Unable to load kqWeb3d.');
    }
})();

var Utils = {
    /**
     * 经纬度转墨卡托坐标.
     * @param {Cartographic} cartographic
     * @param {Ellipsoid} ellipsoid
     * @returns {Cartesian3}
     */
    cartographic2Mercator: function (cartographic, ellipsoid) {
        let projection = new Cesium.WebMercatorProjection(ellipsoid);
        return projection.project(cartographic, new Cesium.Cartesian3());
    },
    /**
     * 获取场景中心点
     * @param {Scene} scene 场景对象
     * @returns {Cartesian3} 中心点世界坐标
     */
    getSceneCenter: function (scene){
        var position;
        var wincoord = new Cesium.Cartesian2(scene.context.drawingBufferWidth / 2,scene.context.drawingBufferHeight / 2);
        if (wincoord) {
            var camera = scene.camera,
                ellipsoid = scene.globe.ellipsoid;
            if (5e5 < Cesium.Cartographic.fromCartesian(camera.position).height) {
                position = camera.pickEllipsoid(wincoord, ellipsoid);
            } else {
                let depthTest = scene.globe.depthTestAgainstTerrain;
                position = scene.pickPosition(wincoord);
                if (!depthTest) {
                    position = camera.pickEllipsoid(wincoord, ellipsoid);
                    let ray = scene.camera.getPickRay(wincoord);
                    position = scene.globe.pick(ray, scene);
                } else if (position) {
                    //需要判断点是不是在地球背面, 背面隐藏
                    let occluder = new Cesium.EllipsoidalOccluder(scene.globe.ellipsoid, scene.camera.position);
                    let visible = occluder.isPointVisible(position);
                    if (!visible) {
                        let ray = scene.camera.getPickRay(wincoord);
                        position = scene.globe.pick(ray, scene);
                    }
                }
            }
        }
        return position;
    },
    /**
     * 获取某个点位处的地图分辨率, 1像素代表的距离值
     * @param {Scene} scene 场景对象
     * @param {Cartesian3} [position] 点位坐标, 世界坐标
     * @param {Number} [radius=1.0] 半径
     * @returns {Number}
     */
    getResolution: function (scene, position, radius) {
        // 计算每像素代表的距离值
        if (!position) {
            var centerX = scene.context.drawingBufferWidth / 2;
            var centerY = scene.context.drawingBufferHeight / 2;
            var cartesian2 = new Cesium.Cartesian2(centerX, centerY);
            var ray = scene.camera.getPickRay(cartesian2);
            position = scene.globe.pick(ray, scene);
        }
        if (position instanceof Cesium.Cartesian3) {
            let boundingSphere = new Cesium.BoundingSphere();
            boundingSphere.center = position;
            boundingSphere.radius = radius || 0.1;
            return scene.camera.getPixelSize(
                boundingSphere,
                scene.context.drawingBufferWidth,
                scene.context.drawingBufferHeight
            );
        } else {
            let screenHeight = scene.context.drawingBufferHeight,
                screenWidth = scene.context.drawingBufferWidth;
            let viewRect = scene.camera.computeViewRectangle();
            let northEast = this.cartographic2Mercator(new Cesium.Cartographic(viewRect.east, viewRect.north)),
                southWest = this.cartographic2Mercator(new Cesium.Cartographic(viewRect.west, viewRect.south));
            let width = Math.abs(northEast[0] - southWest[0]),
                height = Math.abs(northEast[1] - southWest[1]);
            let resolution = (height / screenHeight + width / screenWidth) / 2;
            return resolution;
        }
    },
    /**
     * 获取当前比例尺分母.
     * @param {Viewer|Scene} scene 三维场景对象
     * @param {Array<Number>}[scales] 比例尺可选值, 计算出的比例尺对应到可选值里的某个值.
     * @returns {Number} 比例尺分母
     */
    getScale: function (scene, scales) {
        if (scene instanceof Cesium.Viewer) {
            scene = scene.scene;
        }
        let scale;
        if (scene instanceof Cesium.Scene) {
            let resolution = this.getResolution(scene);
            scale = 96 * resolution / 0.0254;
            if (Array.isArray(scales)) {
                let newScales = scales.map(s => {
                    return Math.abs(scale - s);
                });
                let min = Math.min.apply(null, newScales);
                scale = scales[newScales.indexOf(min)];
            }
        }

        return scale;
    }
}

