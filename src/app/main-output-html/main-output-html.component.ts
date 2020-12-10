import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-output-html',
  templateUrl: './main-output-html.component.html',
  styleUrls: ['./main-output-html.component.css'],
})
export class MainOutputHtmlComponent implements OnInit {
  public props = ['STT', 'TENSP', 'KHSP', 'KL', 'DVT', 'MOTA', 'XUATXU', 'DONGIA', 'NOTE'];
  public Results: [];
  constructor() {}

  ngOnInit(): void {
    this.LoadHtml(this.html);
  }

  LoadHtml(html:any) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var obj = [].map.call(doc.querySelectorAll('tr'), (tr) => {
      return [].slice.call(tr.querySelectorAll('td')).reduce((a, b, i) => {
        return a[this.props[i]] = b.textContent, a;
      }, {});
    });
    this.Results = obj ;
    console.log(this.Results);
  }
  public html   = `<table width="100%" border="0" cellspacing="1" cellpadding="3" name="GOOD_DETAIL" id="GOOD_DETAIL">

      <tbody>
          
        <tr>
          <td class="tdbc">1</td>
          <td class="tdb">Tủ chuyển đổi nguồn tự động</td>
          <td class="tdb">Model: VQ-MH.TCĐNTĐ; Hãng sản xuất: Vinh Quang P&amp;T., JSC</td>
          <td class="tdb">3</td>
          <td class="tdb">Tủ</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Việt Nam</td>
          
          
          <td class="tdbr">126.720.000</td>
          <td class="tdb">UQ1</td>
        </tr>
          
        <tr>
          <td class="tdcc">2</td>
          <td class="tdc">Thiết bị điều khiển nhiệt độ</td>
          <td class="tdc">Model: RE21R; Hãng sản xuất: PCE</td>
          <td class="tdc">1</td>
          <td class="tdc">Cái</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Trung Quốc</td>
          
          
          <td class="tdcr">3.590.000</td>
          <td class="tdc"></td>
        </tr>
          
        <tr>
          <td class="tdbc">3</td>
          <td class="tdb">Biến tần</td>
          <td class="tdb">Model: VFD5A5MS43ANSAA; Hãng sản xuất: Delta</td>
          <td class="tdb">6</td>
          <td class="tdb">Cái</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Trung Quốc</td>
          
          
          <td class="tdbr">9.180.000</td>
          <td class="tdb"></td>
        </tr>
          
        <tr>
          <td class="tdcc">4</td>
          <td class="tdc">Khởi động mềm</td>
          <td class="tdc">Model: ATS22D32Q; Hãng sản xuất: Schneider</td>
          <td class="tdc">6</td>
          <td class="tdc">Cái</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Indonesia</td>
          
          
          <td class="tdcr">16.960.000</td>
          <td class="tdc"></td>
        </tr>
          
        <tr>
          <td class="tdbc">5</td>
          <td class="tdb">Thiết bị đo phân tích công suất, sóng hài</td>
          <td class="tdb">Model: PQ3350-3; Hãng sản xuất: Extech</td>
          <td class="tdb">1</td>
          <td class="tdb">Cái</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Đài Loan</td>
          
          
          <td class="tdbr">137.700.000</td>
          <td class="tdb"></td>
        </tr>
          
        <tr>
          <td class="tdcc">6</td>
          <td class="tdc">Bàn và giá gá thiết bị thực tập PLC</td>
          <td class="tdc">Model: AT.A039X; Hãng sản xuất: TPA</td>
          <td class="tdc">6</td>
          <td class="tdc">Mô hình</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Việt Nam</td>
          
          
          <td class="tdcr">124.730.000</td>
          <td class="tdc">UQ2</td>
        </tr>
          
        <tr>
          <td class="tdbc">7</td>
          <td class="tdb">Máy điều hoà không khí hai cụm (âm trần)</td>
          <td class="tdb">Model: FCQ71KAVEA/RZQ71LV1+BRC1E63+BYCP125K-W18; Hãng sản xuất: Daikin</td>
          <td class="tdb">2</td>
          <td class="tdb">Bộ</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Thái Lan</td>
          
          
          <td class="tdbr">82.820.000</td>
          <td class="tdb"></td>
        </tr>
          
        <tr>
          <td class="tdcc">8</td>
          <td class="tdc">Điều hòa Multy</td>
          <td class="tdc">.</td>
          <td class="tdc">2</td>
          <td class="tdc">Bộ</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Thái Lan</td>
          
          
          <td class="tdcr">98.280.000</td>
          <td class="tdc"></td>
        </tr>
          
        <tr>
          <td class="tdbc">9</td>
          <td class="tdb">Mô hình cắt bổ các thiết bị phụ hệ thống lạnh và điều hòa không khí</td>
          <td class="tdb">Model: VQ-MH.CBTBPHTL-DHKK; Hãng sản xuất: Vinh Quang P&amp;T., JSC</td>
          <td class="tdb">1</td>
          <td class="tdb">Mô hình</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Việt Nam</td>
          
          
          <td class="tdbr">109.760.000</td>
          <td class="tdb">UQ1</td>
        </tr>
          
        <tr>
          <td class="tdcc">10</td>
          <td class="tdc">Điều hòa cục bộ 2 mảnh sử dụng năng lượng mặt trời (Mô hình)</td>
          <td class="tdc">Model: VQ-MH.ĐH-NLMT; Hãng sản xuất: Vinh Quang P&amp;T., JSC</td>
          <td class="tdc">1</td>
          <td class="tdc">Mô hình</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Việt Nam</td>
          
          
          <td class="tdcr">189.580.000</td>
          <td class="tdc">UQ3</td>
        </tr>
          
        <tr>
          <td class="tdbc">11</td>
          <td class="tdb">Thiết bị đo mức tiêu hao nhiên liệu động cơ xăng</td>
          <td class="tdb">Model: FC-9531; Hãng sản xuất: Johsai</td>
          <td class="tdb">1</td>
          <td class="tdb">Bộ</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Nhật Bản</td>
          
          
          <td class="tdbr">354.220.000</td>
          <td class="tdb">GP1</td>
        </tr>
          
        <tr>
          <td class="tdcc">12</td>
          <td class="tdc">Thiết bị phân tích khí thải động cơ xăng</td>
          <td class="tdc">Model: KEG-500 (5GAS); Hãng sản xuất: Koeng</td>
          <td class="tdc">1</td>
          <td class="tdc">Bộ</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Hàn Quốc</td>
          
          
          <td class="tdcr">133.710.000</td>
          <td class="tdc">GP1</td>
        </tr>
          
        <tr>
          <td class="tdbc">13</td>
          <td class="tdb">Thiết bị phân tích khí thải động cơ điezen</td>
          <td class="tdb">Model: SSA 50; Hãng sản xuất: Stenhoj</td>
          <td class="tdb">1</td>
          <td class="tdb">Bộ</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Thụy Điển</td>
          
          
          <td class="tdbr">224.510.000</td>
          <td class="tdb">GP1</td>
        </tr>
          
        <tr>
          <td class="tdcc">14</td>
          <td class="tdc">Máy thử nghiệm Common Rail</td>
          <td class="tdc">Model: CRD-1000; Hãng sản xuất: Koeng</td>
          <td class="tdc">1</td>
          <td class="tdc">Cái</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Hàn Quốc</td>
          
          
          <td class="tdcr">566.160.000</td>
          <td class="tdc">GP1</td>
        </tr>
          
        <tr>
          <td class="tdbc">15</td>
          <td class="tdb">Thiết bị nội soi và vệ sinh giàn tản nhiệt điều hoà ô tô</td>
          <td class="tdb">.</td>
          <td class="tdb">2</td>
          <td class="tdb">Cái</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Trung Quốc</td>
          
          
          <td class="tdbr">7.180.000</td>
          <td class="tdb"></td>
        </tr>
          
        <tr>
          <td class="tdcc">16</td>
          <td class="tdc">Máy chẩn đoán lỗi</td>
          <td class="tdc">Model: G-SCAN3; Hãng sản xuất: EZDS/Thương hiệu: GIT</td>
          <td class="tdc">1</td>
          <td class="tdc">Cái</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Hàn Quốc</td>
          
          
          <td class="tdcr">219.520.000</td>
          <td class="tdc">GP1</td>
        </tr>
          
        <tr>
          <td class="tdbc">17</td>
          <td class="tdb">Mô hình hệ thống đánh lửa ESA có bộ chia điện</td>
          <td class="tdb">Model: VQ-MH.HTĐL-ESA; Hãng sản xuất: Vinh Quang P&amp;T., JSC</td>
          <td class="tdb">1</td>
          <td class="tdb">Bộ</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Việt Nam</td>
          
          
          <td class="tdbr">49.890.000</td>
          <td class="tdb">UQ1</td>
        </tr>
          
        <tr>
          <td class="tdcc">18</td>
          <td class="tdc">Mô hình hệ thống đánh lửa ESA không bộ chia điện</td>
          <td class="tdc">Model: VQ-MH.HTĐL-ESA-KBCĐ; Hãng sản xuất: Vinh Quang P&amp;T., JSC</td>
          <td class="tdc">1</td>
          <td class="tdc">Bộ</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Việt Nam</td>
          
          
          <td class="tdcr">92.800.000</td>
          <td class="tdc">UQ1</td>
        </tr>
          
        <tr>
          <td class="tdbc">19</td>
          <td class="tdb">Mô hình hệ thống khởi động</td>
          <td class="tdb">Model: VQ-MH.HTKĐ; Hãng sản xuất: Vinh Quang P&amp;T., JSC</td>
          <td class="tdb">1</td>
          <td class="tdb">Bộ</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Việt Nam</td>
          
          
          <td class="tdbr">39.910.000</td>
          <td class="tdb">UQ1</td>
        </tr>
          
        <tr>
          <td class="tdcc">20</td>
          <td class="tdc">Mô hình hệ thống nguồn cung cấp</td>
          <td class="tdc">Model: VQ-MH.HTNCC; Hãng sản xuất: Vinh Quang P&amp;T., JSC</td>
          <td class="tdc">1</td>
          <td class="tdc">Bộ</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Việt Nam</td>
          
          
          <td class="tdcr">45.900.000</td>
          <td class="tdc">UQ1</td>
        </tr>
          
        <tr>
          <td class="tdbc">21</td>
          <td class="tdb">Máy phân tích rung động</td>
          <td class="tdb">Model: 810; Hãng sản xuất: Fluke</td>
          <td class="tdb">1</td>
          <td class="tdb">Cái</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Mỹ</td>
          
          
          <td class="tdbr">728.700.000</td>
          <td class="tdb">GP1</td>
        </tr>
          
        <tr>
          <td class="tdcc">22</td>
          <td class="tdc">Camera nhiệt</td>
          <td class="tdc">Model: ti401 Pro; Hãng sản xuất: Fluke</td>
          <td class="tdc">1</td>
          <td class="tdc">Cái</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Mỹ</td>
          
          
          <td class="tdcr">623.930.000</td>
          <td class="tdc">GP1</td>
        </tr>
          
        <tr>
          <td class="tdbc">23</td>
          <td class="tdb">Máy mài 2 đá 300mm</td>
          <td class="tdb">Model: HUG - 12; Hãng sản xuất: Hitachi</td>
          <td class="tdb">3</td>
          <td class="tdb">Cái</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Nhật Bản</td>
          
          
          <td class="tdbr">17.960.000</td>
          <td class="tdb"></td>
        </tr>
          
        <tr>
          <td class="tdcc">24</td>
          <td class="tdc">Máy mài 2 đá để bàn</td>
          <td class="tdc">Model: MB2D; Hãng sản xuất: Hồng Ký</td>
          <td class="tdc">3</td>
          <td class="tdc">Cái</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Việt Nam</td>
          
          
          <td class="tdcr">2.890.000</td>
          <td class="tdc"></td>
        </tr>
          
        <tr>
          <td class="tdbc">25</td>
          <td class="tdb">Máy cắt Plasma cầm tay</td>
          <td class="tdb">Model: TECHNOLOGY PLASMA 54 XT KOMPRESSOR; Hãng sản xuất: Telwin</td>
          <td class="tdb">2</td>
          <td class="tdb">Cái</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Ý</td>
          
          
          <td class="tdbr">47.890.000</td>
          <td class="tdb">GP1</td>
        </tr>
          
        <tr>
          <td class="tdcc">26</td>
          <td class="tdc">Máy đo độ cứng kim loại cầm tay</td>
          <td class="tdc">Model: RHL160; Hãng sản xuất: HUATEC</td>
          <td class="tdc">1</td>
          <td class="tdc">Cái</td>
          <td class="tdc">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdc">Trung Quốc</td>
          
          
          <td class="tdcr">72.890.000</td>
          <td class="tdc"></td>
        </tr>
          
        <tr>
          <td class="tdbc">27</td>
          <td class="tdb">Máy in</td>
          <td class="tdb">Model: LBP 2900; Hãng sản xuất: Canon</td>
          <td class="tdb">4</td>
          <td class="tdb">Cái</td>
          <td class="tdb">Dẫn chiếu Khoản 2.2 Mục 2 Chương V&nbsp;</td>
          
          <td class="tdb">Trung Quốc</td>
          
          
          <td class="tdbr">2.990.000</td>
          <td class="tdb"></td>
        </tr>
</tbody>
</table>`;

}
