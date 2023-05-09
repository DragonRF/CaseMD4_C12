let html = '';
//bfSign In
$('#picSex').html(`
 <div class="row">
            <div class="col-lg-6">
                <div class="section-heading">
                    <h6>Bộ sưu tập</h6>
                    <h4>ĐƯỢC SỬ DỤNG <em>NHIỀU NHẤT</em></h4>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="main-button">
                    <a href="categories.html">Xem tất cả sản phẩm</a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="popular-item">
                    <div class="top-content">
                        <div class="icon">
                            <img src="assets/images/icon-01.png" alt="">
                        </div>
                        <div class="right">
                            <h4>Nature Pic Contest</h4>
                            <span><em>126</em> Available Contests</span>
                        </div>
                    </div>
                    <div class="thumb">
                        <img src="assets/images/popular-01.png" alt="">
                        <span class="category">Top Contest</span>
                        <span class="likes"><i class="fa fa-heart"></i> 256</span>
                    </div>
                    <div class="border-button">
                        <a href="contest-details.html">Browse Nature Pic Contests</a>
                    </div>
                </div>
            </div>
        </div>
`)
// export function bodyWhileLogin(){
//     let html = '';
//     $.ajax({
//         type: 'GET',
//         url: `http://localhost:3000/products/home`,
//         headers: {
//             'Content-Type':  'application/json',
//             'Authorization':  'Bearer ' + localStorage.getItem('token')
//         },
//         success: (caves) => {
//             caves.forEach(item => {
//                 html+=`
//                 `
//             })
//         }
//     })
// }