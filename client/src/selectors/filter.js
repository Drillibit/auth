export default (materials, {name, sortBy }) => {
    return materials.filter((material) => {
        const nameMatch = material.name.toLowerCase().includes(name.toLowerCase());
        return nameMatch;
    })
};