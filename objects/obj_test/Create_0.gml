parts = [
    "asset_unknown", asset_unknown,
    "asset_sprite", asset_sprite,
    "asset_object", asset_object,
    "asset_script", asset_script,
    "asset_room", asset_room,
    "asset_path", asset_path,
    "asset_sound", asset_sound,
    "asset_tiles", asset_tiles,
    "asset_timeline", asset_timeline,
    "asset_font", asset_font,
    "asset_shader", asset_shader,
    "asset_sequence", asset_sequence,
    "asset_animationcurve", asset_animationcurve,
    "asset_particlesystem", asset_particlesystem
];



str = "";
for (var i=0;i<array_length(parts);i+=2) {
    str += $"{parts[i]}: {parts[i+1]}\n"
}

gxtypes_test();

gxtypes_test_map(application_surface);

