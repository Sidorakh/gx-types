parts = [
    "ev_async_system_event", ev_async_system_event,
    "ev_async_push_notification", ev_async_push_notification,
    "ev_async_web_iap", ev_async_web_iap,
    "ev_async_social", ev_async_social,
    "ev_async_web", ev_async_web,
    "ev_async_web_cloud", ev_async_web_cloud,
    "ev_async_web_image_load", ev_async_web_image_load,
    "ev_async_web_networking", ev_async_web_networking,
    "ev_async_web_steam", ev_async_web_steam,
    "ev_async_audio_playback", ev_async_audio_playback,
    "ev_async_audio_recording", ev_async_audio_recording,
    "ev_async_dialog", ev_async_dialog,
    "ev_async_save_load", ev_async_save_load
];



str = "";
for (var i=0;i<array_length(parts);i+=2) {
    str += $"{parts[i]}: {parts[i+1]}\n"
}

gxtypes_test();

gxtypes_test_map();

