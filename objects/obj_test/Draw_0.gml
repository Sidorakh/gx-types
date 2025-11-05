draw_text(x,y,str);
if (keyboard_check_pressed(vk_space)) {
    clipboard_set_text(str);
    gxtypes_test_map(application_surface);
}