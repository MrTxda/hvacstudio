(function(root){'use strict';
const data={title:['Tải xử lý gió tươi & AHU/FAHU','Outdoor-air & AHU/FAHU cooling duty'],desc:['Tính hòa trộn gió, tải dàn lạnh, nước ngưng và lưu lượng nước lạnh từ trạng thái vào/ra yêu cầu.','Calculate mixed air, cooling-coil duty, condensate and chilled-water flow from specified entering/leaving air states.'],fields:[
 ['mode',['Chế độ hệ thống','System mode'],'fahu','',[['fahu',['FAHU — 100% gió tươi','FAHU — 100% outdoor air']],['ahu',['AHU — gió tươi + gió hồi','AHU — outdoor + return air']]]],
 ['pressure',['Áp suất khí quyển','Atmospheric pressure'],101.325,'kPa',60,110],
 ['flow',['Lưu lượng gió tươi tại trạng thái ngoài trời','Outdoor airflow at outdoor conditions'],2000,'m³/h',0,1000000],
 ['outTemp',['Nhiệt độ bầu khô ngoài trời','Outdoor dry-bulb temperature'],35,'°C',-20,60],
 ['outRh',['Độ ẩm tương đối ngoài trời','Outdoor relative humidity'],60,'%',0,100],
 ['returnFlow',['Lưu lượng gió hồi tại trạng thái gió hồi','Return airflow at return conditions'],6000,'m³/h',0,1000000],
 ['returnTemp',['Nhiệt độ bầu khô gió hồi','Return-air dry-bulb temperature'],24,'°C',-20,60],
 ['returnRh',['Độ ẩm tương đối gió hồi','Return-air relative humidity'],50,'%',0,100],
 ['leaveTemp',['Nhiệt độ bầu khô ra dàn lạnh','Coil leaving dry-bulb temperature'],12,'°C',1,40],
 ['leaveRh',['Độ ẩm tương đối ra dàn lạnh','Coil leaving relative humidity'],95,'%',0,100],
 ['waterIn',['Nhiệt độ nước vào dàn','Entering chilled-water temperature'],7,'°C',1,30],
 ['waterDt',['Chênh nhiệt nước ra − vào dàn','Water leaving − entering temperature difference'],5,'K',.1,30],
 ['cpWater',['Nhiệt dung riêng của nước','Water specific heat capacity'],4.186,'kJ/(kg·K)',3,5],
 ['margin',['Dự phòng công suất dàn','Coil duty allowance'],10,'%',0,50]
],notes:[
 ['Qv của mỗi dòng được nhập tại nhiệt độ, RH và áp suất của chính dòng đó. ṁda = Qv/(3600v); hòa trộn bảo toàn khối lượng không khí khô, dung ẩm và entanpi. Lưu lượng ra dàn có thể khác tổng lưu lượng vào vì trạng thái không khí thay đổi.','Each volume flow is entered at its own temperature, RH and pressure. ṁda = Qv/(3600v); mixing conserves dry-air mass, moisture and enthalpy. Leaving volume flow can differ from total inlet volume because air properties change.'],
 ['Q tổng = ṁda(hM − hL). Quy ước tải hiện = ṁda(1,006 + 1,86WM)(TM − TL); tải ẩn là phần còn lại. Nước ngưng = ṁda(WM − WL) × 3600 kg/h. Không tính entanpi nước ngưng chảy ra.','Total duty = ṁda(hM − hL). Sensible duty is defined as ṁda(1.006 + 1.86WM)(TM − TL); latent duty is the remainder. Condensate = ṁda(WM − WL) × 3600 kg/h. Leaving condensate enthalpy is neglected.'],
 ['Nước lạnh: Qv,w = Q/(ρw cp,w ΔTw) × 3600. Tính riêng lưu lượng ứng với tải thực và tải sau dự phòng; dự phòng không làm tăng lượng nước ngưng của trạng thái đã nhập. Chỉ dùng nước sạch, không hỗ trợ glycol.','Chilled water: Qv,w = Q/(ρw cp,w ΔTw) × 3600. Actual-duty and allowance-duty flows are separate; allowance does not increase condensate for the specified air states. Pure water only; glycol is unsupported.'],
 ['Trạng thái ra dàn là mục tiêu do người dùng nhập, chưa xác nhận bằng ADP, bypass factor, số hàng ống hoặc diện tích dàn. Chưa tính gia nhiệt lại, nhiệt quạt, hồi nhiệt, rò lọt, tổn thất áp suất, tải phòng hay hiệu quả thông gió nhiều vùng. Không chọn mã AHU/FAHU hoặc xác nhận tuân thủ tiêu chuẩn.','Leaving air is a user-specified target, not verified against ADP, bypass factor, coil rows or area. Reheat, fan heat, recovery, leakage, pressure losses, room loads and multizone ventilation efficiency are excluded. No AHU/FAHU product selection or standards-compliance determination.']
]};root.HVACAHUData=data;if(typeof module!=='undefined'&&module.exports)module.exports=data;
})(typeof window!=='undefined'?window:globalThis);
