parts = [
    "surface_rgba8unorm",		surface_rgba8unorm,
    "surface_r8unorm",			surface_r8unorm,
    "surface_rg8unorm",			surface_rg8unorm,
    "surface_rgba4unorm",		surface_rgba4unorm,
    "surface_rgba16float",		surface_rgba16float,
    "surface_r16float",			surface_r16float,
    "surface_rgba32float",		surface_rgba32float,
    "surface_r32float",			surface_r32float
];

str = "";
for (var i=0;i<array_length(parts);i+=2) {
    str += $"{parts[i]}: {parts[i+1]}\n"
}

//gxtypes_test();
surf = -1;

