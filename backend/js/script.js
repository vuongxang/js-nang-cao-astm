$(document).ready(function () {
  $("#siderbar").load("siderbar.html");
});


// const url = 'https://5fc51af836bc7900163446a0.mockapi.io/products';

// const $ = document.querySelector.bind(document);


// //Show products
// axios.get(url)
//     .then(function (response) {

//         if (response.status === 200) {
//             var data = response.data;
//             const results = data.map((item) => {
//                 return `
//                         <tr id="row-${item.id}">
//                             <td>${item.id}</td>    
//                             <td>${item.name}</td>    
//                             <td><img src="${item.image}" width="70"></td>
//                             <td>${item.price}</td>    
//                             <td>${item.desc}</td>    
//                             <td>
//                                 <a class="btn btn-primary" href="edit-product.html?id=${item.id}">Edit</a>
//                                 <a class="btn btn-danger" onclick="removeElement(${item.id})">remove</a>
//                             </td>
//                         </tr>
//                         `
//             }).join("");
//             $('#list-product>tbody').innerHTML = results;
//         }
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });



//remove product
// function removeElement(id) {
//     Swal.fire({
//         title: 'Chắc chắn xóa sản phẩm?',
//         text: "Sau khi xóa sẽ không lấy lại dữ liệu được",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Đồng ý!',
//         cancelButtonText: 'Không đồng ý!',
//       }).then((result) => {
//         if (result.isConfirmed) {

//             //Gửi request lên sever ở đây
//           alert('Đã xóa');
//         }
//       });
    // const removeUrl = `${url}/${id}`;
    // axios.delete(removeUrl)
    //     .then(function (response) {
    //         // handle success
    //         if (response.status == 200) {
    //             const removeNode = $('#row-' + id);
    //             removeNode.remove();
    //         }
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .then(function () {
    //         // always executed
    //     });
// }
