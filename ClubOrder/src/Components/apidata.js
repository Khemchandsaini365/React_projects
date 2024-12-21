const apis = [
  {
    Master: "Category",
    URL: "https://cluborder.eterp.in/UploadCategory",
    Method: "POST",
  },
  {
    Master: "City",
    URL: "https://cluborder.eterp.in/UploadCity",
    Method: "POST",
  },
  {
    Master: "Location",
    URL: "https://cluborder.eterp.in/UploadLocation",
    Method: "POST",
  },
  {
    Master: "Member",
    URL: "https://cluborder.eterp.in/UploadMember",
    Method: "POST",
  },
  {
    Master: "Order",
    URL: "https://cluborder.eterp.in/OrdersByLocationList?Location=",
    Method: "GET",
  },
  {
    Master: "Product",
    URL: "https://cluborder.eterp.in/UploadProduct",
    Method: "POST",
  },
  {
    Master: "State",
    URL: "https://cluborder.eterp.in/UploadState",
    Method: "POST",
  },
  {
    Master: "Table",
    URL: "https://cluborder.eterp.in/UploadTable",
    Method: "POST",
  },
  {
    Master: "Post KOTResponse",
    URL: "https://cluborder.eterp.in/UpdateOrdersSyncByOrderID",
    Method: "POST",
  },
  {
    Master: "MemberOutstanding",
    URL: "https://cluborder.eterp.in/UploadMemberOutstandings",
    Method: "POST",
  },
  {
    Master: "Member Statement",
    URL: "https://cluborder.eterp.in/UploadStatementOfAc",
    Method: "POST",
    ClearAPI: "https://cluborder.eterp.in/ClearStatementOfAc",
  },
  {
    Master: "Room Master",
    URL: "https://cluborder.eterp.in/UploadRoomMaster",
    Method: "POST",
  },
];

export default apis;
