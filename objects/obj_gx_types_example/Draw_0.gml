draw_set_color(c_white);
draw_text(x,y,str);
if (!surface_exists(surf)) {
    surf = surface_create(64,64);
}
if (keyboard_check_pressed(vk_space)) {
    clipboard_set_text(str);
    gxtypes_test_map(surf);
    //clipboard_set_text(json_stringify(sprite_nineslice_create()));
}

draw_surface(surf,256,0);