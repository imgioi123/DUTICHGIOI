const birds = [
    {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
    {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
    {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
    {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
    {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
];

// Sử dụng map và lambda expression để lọc và in ra mã khoa học của các loài chim
const scientificIDs = birds.map(bird => bird.ID);

// In ra kết quả
console.log("Mã khoa học của các loài chim:");
console.log(scientificIDs);