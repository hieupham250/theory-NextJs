import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import React from "react";
import { json } from "stream/consumers";
// lấy ở trong cơ sở dữ liệu
// dùng API tương tác vào cơ sở dữ liệu ==> data
// const users = [
//   {
//     id: 1,
//     name: "mỹ tâm",
//   },
//   {
//     id: 2,
//     name: "cẩm ly",
//   },
// ];

// export async function GET(req: any, res: any) {
//   console.log(res);
//   // destructoring
//   let find = users.find((item) => {
//     return item.id == res.params.id;
//   });

//   return NextResponse.json({ message: find ? find : "không thấy" });
// }

// export async function PUT(request: any) {
//   const data = await request.json();
//   console.log(data);

//   return NextResponse.json({
//     messenge: "cập nhật thành công thành công",
//     user: data,
//   });
// }

// export async function PATCH(request: any) {
//   const data = await request.json();
//   console.log(data);

//   return NextResponse.json({
//     messenge: "cập nhật thành công thành công với metho PATCH",
//     user: data,
//   });
// }

// export async function DELETE(request: any) {
//   const data = await request.json();
//   console.log(data);

//   return NextResponse.json({
//     messenge: "Xóa thành công",
//     user: data,
//   });
// }

export async function PUT(
  req: NextRequest,
  params: { params: { id: string } }
) {
  try {
    // b1: lấy vị trí file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json");
    // đọc file
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // b2: tìm kiếm vị trí phần tử cần cập nhật
    const fileIndex = users.findIndex((user) => user.id == +params.params.id);
    console.log(fileIndex);

    // b3: gán lại giá trị cho phần tử cần cập nhật
    if (fileIndex !== -1) {
      users[fileIndex].name = "dương";
    }

    // b4: ghi file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf8");

    // b5: trả về message cho client

    return NextResponse.json("put");
  } catch (err) {
    return NextResponse.json(err);
  }
}
