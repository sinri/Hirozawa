function kitchen(){
    helper.addLine(new THREE.Vector3(-10000, 0, 0),new THREE.Vector3(10000, 0, 0),helper.createMaterialByColor(0xFFFFFF));
    helper.addLine(new THREE.Vector3(0, -10000, 0),new THREE.Vector3(0, 10000, 0),helper.createMaterialByColor(0xFFFFFF));
    helper.addLine(new THREE.Vector3(0, 0, -10000),new THREE.Vector3(0, 0, 10000),helper.createMaterialByColor(0xFFFFFF));
    // helper.addCube(1000,1000,1000,0,0,0);

    //let wallMaterial=helper.createMaterialByTexture('textures/rin.jpg');
    //helper.createMaterialByColor(0xdddddd);
    helper.addCube(
        160,2400,2880,
        160/2,1200,-2880/2,
        helper.createMaterialByColor(0xcccccc)
    );
    helper.addCube(
        160+1730+160,2400,160,
        (160+1730+160)/2,1200,-2880-160/2,
        helper.createMaterialByColor(0x888888)
    );
    helper.addCube(
        160,2400,2880,
        (160+1730+160)-160/2,1200,-2880/2,
        helper.createMaterialByColor(0xcccccc)
    );

    let shelfMaterial=helper.createMaterialByColor(0x44eeff)
    //helper.createMaterialByTexture('textures/bamami.png');
    helper.addCube(
        1730,800,600,
        160+1730/2,400,-2880+600/2,
        shelfMaterial
    );

    let ovenSideMaterial=helper.createMaterialByColor(0xee7722);
    //helper.createMaterialByTexture('textures/miku_clapping.jpg');
    let ovenMaterial=helper.createMaterialByColor(0xa5e732);
    let ovenLeftAreaLength=200;
    let ovenAreaLength=900;
    let ovenRightAreaLength=2880-600-ovenAreaLength-600-ovenLeftAreaLength;
    helper.addCube(
        600,800,ovenLeftAreaLength,
        160+1730-300,400,-2880+600+ovenLeftAreaLength/2,
        ovenSideMaterial
    );
    {
        helper.addCube(
            600,800,ovenAreaLength,
            160+1730-300,800/2,-2880+600+ovenLeftAreaLength+ovenAreaLength/2,
            ovenMaterial
        );
        helper.addCube(
            100,500,ovenAreaLength,
            160+1730-100/2,800+500/2,-2880+600+ovenLeftAreaLength+ovenAreaLength/2,
            ovenMaterial
        );
        helper.addCube(
            200,50,ovenAreaLength,
            160+1730-100-200/2,800+350,-2880+600+ovenLeftAreaLength+ovenAreaLength/2,
            ovenMaterial
        );
    }
    helper.addCube(
        600,800,ovenRightAreaLength,
        160+1730-300,400,-2880+600+ovenLeftAreaLength+ovenAreaLength+ovenRightAreaLength/2,
        ovenSideMaterial
    );

    // above shelves
    helper.addCube(
        500,600,600+ovenLeftAreaLength+ovenAreaLength+ovenRightAreaLength,
        160+1730-500/2,1300+200+600/2,-2880+(600+ovenLeftAreaLength+ovenAreaLength+ovenRightAreaLength)/2,
        ovenSideMaterial
    );

    let refrigeratorInside=false;
    if(refrigeratorInside){
        let refrigeratorMaterial=helper.createMaterialByColor(0xf5e7e9);
        helper.addCube(
            650,1800,600,
            160+1730-650/2,1800/2,-2880+600+ovenLeftAreaLength+ovenAreaLength+ovenRightAreaLength+600/2,
            refrigeratorMaterial
        );
    }else{
        let refrigeratorMaterial=helper.createMaterialByColor(0xf5e7e9);
        helper.addCube(
            600,800,600,
            160+1730-600/2,800/2,-2880+600+ovenLeftAreaLength+ovenAreaLength+ovenRightAreaLength+600/2,
            refrigeratorMaterial
        );

        // above shelf
        helper.addCube(
            500,600,600,
            160+1730-500/2,1300+200+600/2,-2880+(600+ovenLeftAreaLength+ovenAreaLength+ovenRightAreaLength)+600/2,
            ovenSideMaterial
        );
    }

    let needAnotherSide=true;
    if(needAnotherSide){
        helper.addCube(
            600,800,ovenLeftAreaLength+ovenAreaLength+ovenRightAreaLength,
            160+600/2,800/2,-2880+600+(ovenLeftAreaLength+ovenAreaLength+ovenRightAreaLength)/2,
            ovenSideMaterial
        );
    }

    // spotlight
    helper.addSpotLight(0xffffff,600+1730/2, 2400, -2880/2);

    helper.Render();

}