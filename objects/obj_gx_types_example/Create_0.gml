var arr = gxtypes_test();

map = arr[0];
buff = arr[1];
list = arr[2];
surf = arr[3];

strings = $"Map: {json_encode(map)}\nBuffer: {buffer_get_address(buff)} - {buffer_read(buff,buffer_string)}\nList: {json_encode(list)}";