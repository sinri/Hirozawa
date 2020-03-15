function ThreeHelper() {

    this.lookAtDirection={x:1000,y:1300,z:-1000};

    // functions

    this.Initialize = function () {
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000);
        //camera.position.z = 1;
        this.camera.position.x = 1500;
        this.camera.position.y = 2600;
        this.camera.position.z = 5000;

        this.camera.lookAt(this.lookAtDirection.x,this.lookAtDirection.y,this.lookAtDirection.z);

        this.scene = new THREE.Scene();

        this.material = new THREE.MeshNormalMaterial();

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(window.innerWidth-40, window.innerHeight-80);
        document.body.appendChild(this.renderer.domElement);

        this.Render();
    };

    this.Render = function () {
        this.renderer.render(this.scene, this.camera);
        console.log("Rendered");
    };

    this.MoveCamera=function(key,diff){
        this.camera.position[key]+=diff;
        this.Render();
        console.log('MoveCamera',key+'='+this.camera.position[key]);
    }

    this.LookAt=function(x,y,z){
        this.lookAtDirection.x=x;
        this.lookAtDirection.y=y;
        this.lookAtDirection.z=z;
        this.camera.lookAt(this.lookAtDirection.x,this.lookAtDirection.y,this.lookAtDirection.z);
    }

    this.MoveLookDirection=function(key,diff){
        this.lookAtDirection[key]+=diff;
        this.camera.lookAt(this.lookAtDirection.x,this.lookAtDirection.y,this.lookAtDirection.z);
        this.Render();
        console.log('MoveLookDirection',key+'='+this.lookAtDirection[key]);
    }

    this.addSpotLight=function(lightColor,x,y,z){
        let spotLight = new THREE.SpotLight(lightColor, 1);
        spotLight.position.set(x,y,z);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        this.scene.add(spotLight);
    }

    this.createMaterialByColor=function(colorHex){
        // 0xeeffdd
        return new THREE.MeshBasicMaterial( { color: colorHex } ); // 材质
    }

    this.createMaterialByTexture=function(path){
        var texture = new THREE.TextureLoader().load( path );
        return new THREE.MeshBasicMaterial( { map: texture } );
    }

    this.addLine=function (vector3_a,vector3_b,material) {
        const points = [vector3_a, vector3_b];
        //points.push(new THREE.Vector3(-10000, 0, 0));
        //points.push(new THREE.Vector3(10000, 0, 0));
        if(!material)material=new THREE.MeshNormalMaterial();
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        this.scene.add(line);
        this.Render();
    };

    this.addCube=function (width,height,depth,x,y,z,material,edgeColor) {
        if(!material) material = new THREE.MeshNormalMaterial();
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        // the position XYZ is the center of the object
        cube.position.set(x, y, z);

        if(!edgeColor){
            edgeColor=0xff0000;
        }
        if(edgeColor){
            let edges = new THREE.EdgesHelper(cube, edgeColor);
            edges.material.linewidth = 1;
            edges.position.set(x, y, z);
            this.scene.add(edges);
        }
        this.Render();
    };

    // constructor

    this.Initialize();

    return this;
}