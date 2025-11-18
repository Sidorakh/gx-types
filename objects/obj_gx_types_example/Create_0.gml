var arr = gxtypes_test();

map = arr[0];
buff = arr[1];
list = arr[2];
surf = arr[3];

var items = "";
for (var i=0;i<ds_list_size(list);i++) {
    items += $"{list[| i]}";
    if (i < ds_list_size(list)-1) {
        items += ", ";
    }
}

strings = $"Map: {json_encode(map)}\nBuffer: {buffer_get_address(buff)} - {buffer_read(buff,buffer_string)}\nList: {items}";