parts = [
    "bboxkind_rectangular",bboxkind_rectangular,
    "bboxkind_ellipse",bboxkind_ellipse,
    "bboxkind_diamond",bboxkind_diamond,
    "bboxkind_precise",bboxkind_precise,
    "bboxkind_spine",bboxkind_spine,
];


str = "";
for (var i=0;i<array_length(parts);i+=2) {
    str += $"{parts[i]}: {parts[i+1]}\n"
}

//gxtypes_test();
surf = -1;
