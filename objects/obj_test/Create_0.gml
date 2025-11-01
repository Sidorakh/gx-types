parts = [
    [nameof(buffer_seek_start),buffer_seek_start],
    [nameof(buffer_seek_relative),buffer_seek_relative],
    [nameof(buffer_seek_end),buffer_seek_end],
];



str = "";
for (var i=0;i<array_length(parts);i++) {
    str += $"{parts[i][0]}: {parts[i][1]}\n"
}

gxtypes_test();

var map = ds_map_create();
map[? "array"] = [1,2,3,4,5,6,7,8,9];
map[? "struct"] = {
    id: "hello",
    text: "world",
    idx: id,
}
x = 4;
y = 4;
gxtypes_test_map(map);

