export const calculate = (data, state) => {
    let raw = parseFloat(state.space) * parseFloat(state.material.price);
    let angleSum = (state.angle > 4) ? ((state.angle - 4) * data.anglePrice) : 0;

    let customStitch = state.customStitch === "yes" ? data.customStitch : 0;
    let stitchAlignment = state.stitchAlignment === "yes" ? data.stitchAlignment : 0;
    let multiMaterial = state.multiMaterial === "yes" ? data.multiMaterial : 0;

    let additional = raw + ((raw * (customStitch / 100)) + (raw * (stitchAlignment / 100)) + (raw * (multiMaterial / 100)));
    let cut = state.cut * data.cutPrice;
    let curve = state.curve * data.curvePrice;
    let res = additional + angleSum + cut + curve + data.packPrice;
    if(res < 1500){
        let result = 1500;
        return result;
    } else {
        let result = Math.ceil(parseFloat(res));
        return result;
    }
};