(function(root){'use strict';const data={
  "fabrication": {
    "title": [
      "Quy cách chế tạo & vật tư ống gió",
      "Duct fabrication & material take-off"
    ],
    "desc": [
      "Tính vật tư và khối lượng ống gió từ các giá trị mẫu hoặc thông số bạn tự chỉnh.",
      "Calculate duct material quantities and mass from editable example values or your own inputs."
    ],
    "routes": [
      "che-tao-ong-gio",
      "duct-fabrication"
    ],
    "groups": [
      {
        "title": [
          "1. Hình học & tuyến ống",
          "1. Geometry & duct run"
        ],
        "fields": [
          {
            "key": "shape",
            "label": [
              "Dạng ống",
              "Duct shape"
            ],
            "value": "rect",
            "options": [
              [
                "rect",
                [
                  "Chữ nhật",
                  "Rectangular"
                ]
              ],
              [
                "round",
                [
                  "Tròn",
                  "Round"
                ]
              ]
            ]
          },
          {
            "key": "material",
            "label": [
              "Vật liệu tôn",
              "Sheet material"
            ],
            "value": "steel",
            "options": [
              [
                "steel",
                [
                  "Thép mạ kẽm · 7850 kg/m³",
                  "Galvanized steel · 7850 kg/m³"
                ]
              ],
              [
                "stainless",
                [
                  "Inox · 7900 kg/m³",
                  "Stainless steel · 7900 kg/m³"
                ]
              ],
              [
                "aluminium",
                [
                  "Nhôm · 2700 kg/m³",
                  "Aluminium · 2700 kg/m³"
                ]
              ]
            ]
          },
          {
            "key": "a",
            "label": [
              "Chiều rộng ngoài / đường kính ngoài",
              "Outside width / outside diameter"
            ],
            "value": 600,
            "unit": "mm",
            "min": 50,
            "max": 5000
          },
          {
            "key": "b",
            "label": [
              "Chiều cao ngoài",
              "Outside height"
            ],
            "value": 400,
            "unit": "mm",
            "min": 50,
            "max": 5000
          },
          {
            "key": "thicknessMode",
            "label": [
              "Chọn chiều dày",
              "Thickness selection"
            ],
            "options": [
              [
                "auto",
                [
                  "Tự chọn theo kích thước",
                  "Automatic by size"
                ]
              ],
              [
                "manual",
                [
                  "Tự chỉnh",
                  "Manual"
                ]
              ]
            ],
            "value": "auto"
          },
          {
            "key": "t",
            "label": [
              "Chiều dày tôn",
              "Sheet thickness"
            ],
            "value": 0.8,
            "unit": "mm",
            "min": 0.3,
            "max": 5,
            "suggestions": [
              0.5,
              0.6,
              0.75,
              0.8,
              1,
              1.2,
              1.5
            ],
            "help": "thickness"
          },
          {
            "key": "length",
            "label": [
              "Tổng chiều dài tuyến thẳng",
              "Straight run length"
            ],
            "value": 12,
            "unit": "m",
            "min": 0.1,
            "max": 10000
          },
          {
            "key": "section",
            "label": [
              "Chiều dài tối đa mỗi đoạn chế tạo",
              "Maximum fabricated section length"
            ],
            "value": 1.2,
            "unit": "m",
            "min": 0.1,
            "max": 6,
            "suggestions": [
              0.8,
              1,
              1.2,
              1.5
            ],
            "help": "section"
          },
          {
            "key": "pressure",
            "label": [
              "Áp suất tĩnh thiết kế có dấu",
              "Signed design static pressure"
            ],
            "value": 500,
            "unit": "Pa",
            "min": -10000,
            "max": 10000
          }
        ]
      },
      {
        "title": [
          "2. Mối nối & tăng cứng",
          "2. Joints & stiffeners"
        ],
        "fields": [
          {
            "key": "jointMode",
            "label": [
              "Chọn mối nối ngang",
              "Transverse joint selection"
            ],
            "options": [
              [
                "auto",
                [
                  "Tự chọn theo kích thước",
                  "Automatic by size"
                ]
              ],
              [
                "manual",
                [
                  "Tự chỉnh",
                  "Manual"
                ]
              ]
            ],
            "value": "auto"
          },
          {
            "key": "jointPreset",
            "label": [
              "Chọn nhanh mối nối",
              "Quick joint setup"
            ],
            "value": "angle25",
            "options": [
              [
                "angle25",
                [
                  "Bích thép góc L25×25×3",
                  "Steel angle flange L25×25×3"
                ]
              ],
              [
                "angle30",
                [
                  "Bích thép góc L30×30×3",
                  "Steel angle flange L30×30×3"
                ]
              ],
              [
                "angle40",
                [
                  "Bích thép góc L40×40×4",
                  "Steel angle flange L40×40×4"
                ]
              ],
              [
                "tdfSample",
                [
                  "Bích liền · mẫu cộng 30 mm/đầu",
                  "Integral flange · sample 30 mm/end"
                ]
              ],
              [
                "band40",
                [
                  "Nẹp/đai thép 40×1 mm",
                  "Steel coupling band 40×1 mm"
                ]
              ],
              [
                "custom",
                [
                  "Tự nhập chi tiết",
                  "Custom details"
                ]
              ]
            ]
          },
          {
            "key": "stiffenerPreset",
            "label": [
              "Chọn nhanh tăng cứng",
              "Quick stiffener setup"
            ],
            "value": "none",
            "options": [
              [
                "none",
                [
                  "Không tính tăng cứng trung gian",
                  "No intermediate stiffeners"
                ]
              ],
              [
                "angle20",
                [
                  "Thép góc L20×20×3",
                  "Steel angle L20×20×3"
                ]
              ],
              [
                "angle25",
                [
                  "Thép góc L25×25×3",
                  "Steel angle L25×25×3"
                ]
              ],
              [
                "custom",
                [
                  "Tự nhập chi tiết",
                  "Custom details"
                ]
              ]
            ]
          },
          {
            "key": "joint",
            "label": [
              "Mối nối ngang",
              "Transverse joint"
            ],
            "value": "angle",
            "options": [
              [
                "tdf",
                [
                  "Bích liền TDF/TDC",
                  "Integral TDF/TDC flange"
                ]
              ],
              [
                "angle",
                [
                  "Bích thép góc",
                  "Angle flange"
                ]
              ],
              [
                "slip",
                [
                  "Nẹp nối / đai nối",
                  "Slip joint / coupling band"
                ]
              ]
            ]
          },
          {
            "key": "endFrames",
            "label": [
              "Số khung bích ở hai đầu tuyến",
              "Terminal flange frames"
            ],
            "value": 2,
            "unit": "",
            "min": 0,
            "max": 2
          },
          {
            "key": "jointLinearMass",
            "label": [
              "Khối lượng bích/nẹp trên mét chu vi",
              "Flange / coupling mass per perimeter metre"
            ],
            "value": 1.10685,
            "unit": "kg/m",
            "min": 0,
            "max": 20
          },
          {
            "key": "stiffenerSpacing",
            "label": [
              "Bước tăng cứng trung gian tối đa",
              "Maximum intermediate stiffener spacing"
            ],
            "value": 0.6,
            "unit": "m",
            "min": 0.1,
            "max": 6
          },
          {
            "key": "stiffenerLinearMass",
            "label": [
              "Khối lượng tăng cứng trên mét chu vi",
              "Stiffener mass per perimeter metre"
            ],
            "value": 0,
            "unit": "kg/m",
            "min": 0,
            "max": 20
          }
        ]
      },
      {
        "title": [
          "3. Khai triển & cách nhiệt",
          "3. Development & insulation"
        ],
        "fields": [
          {
            "key": "insulationPreset",
            "label": [
              "Chọn nhanh cách nhiệt ngoài",
              "Quick external insulation"
            ],
            "value": "25-48",
            "options": [
              [
                "none",
                [
                  "Không cách nhiệt",
                  "No insulation"
                ]
              ],
              [
                "25-48",
                [
                  "25 mm · 48 kg/m³",
                  "25 mm · 48 kg/m³"
                ]
              ],
              [
                "50-48",
                [
                  "50 mm · 48 kg/m³",
                  "50 mm · 48 kg/m³"
                ]
              ],
              [
                "25-80",
                [
                  "25 mm · 80 kg/m³",
                  "25 mm · 80 kg/m³"
                ]
              ],
              [
                "custom",
                [
                  "Tự nhập chiều dày & khối lượng riêng",
                  "Custom thickness & density"
                ]
              ]
            ]
          },
          {
            "key": "seam",
            "label": [
              "Phần tôn cộng cho mỗi mí dọc",
              "Sheet allowance per longitudinal seam"
            ],
            "value": 30,
            "unit": "mm",
            "min": 0,
            "max": 100
          },
          {
            "key": "seams",
            "label": [
              "Số mí dọc trên tiết diện",
              "Longitudinal seams per cross-section"
            ],
            "value": 2,
            "unit": "",
            "min": 0,
            "max": 8
          },
          {
            "key": "endAllowance",
            "label": [
              "Phần tôn cộng tại mỗi đầu đoạn",
              "Sheet allowance at each section end"
            ],
            "value": 0,
            "unit": "mm",
            "min": 0,
            "max": 100
          },
          {
            "key": "waste",
            "label": [
              "Hao hụt mua tôn",
              "Sheet purchasing waste"
            ],
            "value": 10,
            "unit": "%",
            "min": 0,
            "max": 100,
            "suggestions": [
              5,
              10,
              15
            ]
          },
          {
            "key": "insulation",
            "label": [
              "Chiều dày cách nhiệt ngoài",
              "External insulation thickness"
            ],
            "value": 25,
            "unit": "mm",
            "min": 0,
            "max": 300
          },
          {
            "key": "insDensity",
            "label": [
              "Khối lượng riêng cách nhiệt",
              "Insulation density"
            ],
            "value": 48,
            "unit": "kg/m³",
            "min": 0,
            "max": 500
          },
          {
            "key": "extraMass",
            "label": [
              "Khối lượng bổ sung dọc tuyến",
              "Additional distributed mass"
            ],
            "value": 0,
            "unit": "kg/m",
            "min": 0,
            "max": 500
          }
        ]
      }
    ],
    "notes": [
      [
        "Chế độ Tự chọn cập nhật chiều dày và mối nối khi đổi kích thước ống chữ nhật tôn mạ kẽm áp thấp. Sửa tay chuyển mục đó sang Tự chỉnh. Các tổ hợp là giá trị khởi đầu để bóc vật tư, không phải xác nhận chịu áp hoặc quy cách bắt buộc.",
        "Automatic mode updates thickness and joints when low-pressure rectangular galvanized duct dimensions change. Manual edits switch that setting to Manual. Combinations are starting values for material quantities, not pressure-capacity checks or mandatory construction."
      ],
      [
        "Các ô đã có giá trị mẫu để bắt đầu tính và đều có thể chỉnh sửa. Chiều dài đoạn và hao hụt có thể tự chỉnh theo khổ tôn và cách gia công. Áp suất chỉ ghi nhận điều kiện thiết kế, không tham gia công thức bóc vật tư.",
        "All inputs start with editable example values. Section length and waste can be adjusted to match the sheet size and fabrication method. Pressure records the design condition and does not enter the take-off equations."
      ],
      [
        "Chỉ tính tuyến ống thẳng cùng tiết diện. Kích thước là kích thước ngoài vỏ tôn; chưa gồm cách nhiệt. Khối lượng riêng là giá trị mẫu có ghi trên lựa chọn; chưa tính riêng lớp mạ.",
        "Straight, constant-section duct run only. Dimensions are outside the sheet-metal shell, excluding insulation. Density is the stated example material value; coating mass is not calculated separately."
      ],
      [
        "Số đoạn N = ceil(L/l); mối nối trong tuyến = N−1. Bích: hai khung mỗi mối nối cộng khung đầu tuyến đã nhập. Nẹp/đai: một chu vi mỗi mối nối; bỏ qua khung đầu. Tăng cứng trung gian đếm riêng trong từng đoạn, không đếm lại khung đầu đoạn.",
        "Sections N = ceil(L/l); internal joints = N−1. Flanges use two frames per joint plus entered terminal frames. Slip joints/bands use one perimeter per joint and exclude terminal frames. Intermediate stiffeners restart in each fabricated section and exclude end frames."
      ],
      [
        "Diện tích khai triển = chu vi trung bình × L + phần mí dọc + phần cộng đầu đoạn. Tôn mua gồm hao hụt; khối lượng lắp đặt không gồm hao hụt. Với bích liền, nhập phần cộng đầu theo chi tiết thực và đặt khối lượng bích bổ sung bằng 0 nếu đã nằm trong phần tôn đó để tránh đếm đôi.",
        "Developed sheet area = mean perimeter × L + seam allowances + end allowances. Purchased sheet includes waste; installed mass excludes waste. For integral flanges, enter the actual end development and set additional flange mass to zero if already included in that sheet development."
      ],
      [
        "Chưa gồm co, côn, tê, cửa thăm, van, bulông, ke góc, gioăng, keo và bố trí cắt tối ưu. Không xác nhận độ bền tôn/bích, độ kín hay khả năng chịu áp chỉ từ tên loại mối nối.",
        "Elbows, transitions, tees, access doors, dampers, bolts, corners, gaskets, sealant and nesting optimization are excluded. A joint name alone does not establish sheet/joint strength, leakage class or pressure capacity."
      ],
      [
        "Mẫu bích liền cộng 30 mm/mỗi đầu, không cộng thêm khối lượng bích rời. Chiều dài đoạn mẫu không vượt 1,14 m trên cạnh tôn 1,22 m với phần cắt bỏ 20 mm. Đây là ví dụ thao tác; sửa theo biên dạng máy và khổ tôn thực tế. Tăng cứng và loại nối chọn nhanh không phải kiểm tra chịu áp.",
        "The integral-flange sample adds 30 mm/end and no separate flange mass. Sample section length is capped at 1.14 m for a 1.22 m sheet dimension with 20 mm cutting reserve. This is an operating example; use actual machine development and sheet dimensions. Quick joint/stiffener choices do not verify pressure capacity."
      ]
    ],
    "sources": []
  },
  "supports": {
    "title": [
      "Tính giá đỡ & ty treo ống gió",
      "Duct trapeze & hanger rod checks"
    ],
    "desc": [
      "Chọn nhanh ty và thanh ngang theo tải, kiểm tra từng bộ treo và lưu danh sách theo tuyến để lập báo cáo.",
      "Select rods and bearers from trial loads, check each trapeze and save run schedules for reporting."
    ],
    "routes": [
      "gia-do-ong-gio",
      "duct-supports"
    ],
    "groups": [
      {
        "title": [
          "1. Ống gió & tải trọng",
          "1. Duct & loads"
        ],
        "fields": [
          {
            "key": "shape",
            "label": [
              "Dạng ống",
              "Duct shape"
            ],
            "value": "rect",
            "options": [
              [
                "rect",
                [
                  "Chữ nhật",
                  "Rectangular"
                ]
              ],
              [
                "round",
                [
                  "Tròn",
                  "Round"
                ]
              ]
            ]
          },
          {
            "key": "material",
            "label": [
              "Vật liệu tôn",
              "Sheet material"
            ],
            "value": "steel",
            "options": [
              [
                "steel",
                [
                  "Thép mạ kẽm · 7850 kg/m³",
                  "Galvanized steel · 7850 kg/m³"
                ]
              ],
              [
                "stainless",
                [
                  "Inox · 7900 kg/m³",
                  "Stainless steel · 7900 kg/m³"
                ]
              ],
              [
                "aluminium",
                [
                  "Nhôm · 2700 kg/m³",
                  "Aluminium · 2700 kg/m³"
                ]
              ]
            ]
          },
          {
            "key": "a",
            "label": [
              "Chiều rộng ngoài / đường kính ngoài",
              "Outside width / outside diameter"
            ],
            "value": 600,
            "unit": "mm",
            "min": 50,
            "max": 5000
          },
          {
            "key": "b",
            "label": [
              "Chiều cao ngoài",
              "Outside height"
            ],
            "value": 400,
            "unit": "mm",
            "min": 50,
            "max": 5000
          },
          {
            "key": "thicknessMode",
            "label": [
              "Chọn chiều dày",
              "Thickness selection"
            ],
            "value": "auto",
            "options": [
              [
                "auto",
                [
                  "Tự động",
                  "Automatic"
                ]
              ],
              [
                "manual",
                [
                  "Tự chỉnh",
                  "Manual"
                ]
              ]
            ]
          },
          {
            "key": "t",
            "label": [
              "Chiều dày tôn",
              "Sheet thickness"
            ],
            "value": 0.75,
            "unit": "mm",
            "min": 0.3,
            "max": 5,
            "suggestions": [
              0.5,
              0.6,
              0.75,
              0.8,
              1,
              1.2,
              1.5
            ],
            "help": "thickness"
          },
          {
            "key": "insulationPreset",
            "label": [
              "Chọn nhanh cách nhiệt",
              "Insulation preset"
            ],
            "value": "25-48",
            "options": [
              [
                "none",
                [
                  "Không cách nhiệt",
                  "No insulation"
                ]
              ],
              [
                "25-48",
                [
                  "25 mm · 48 kg/m³",
                  "25 mm · 48 kg/m³"
                ]
              ],
              [
                "50-48",
                [
                  "50 mm · 48 kg/m³",
                  "50 mm · 48 kg/m³"
                ]
              ],
              [
                "25-80",
                [
                  "25 mm · 80 kg/m³",
                  "25 mm · 80 kg/m³"
                ]
              ],
              [
                "custom",
                [
                  "Tự nhập",
                  "Custom"
                ]
              ]
            ]
          },
          {
            "key": "insulation",
            "label": [
              "Chiều dày cách nhiệt ngoài",
              "External insulation thickness"
            ],
            "value": 25,
            "unit": "mm",
            "min": 0,
            "max": 300
          },
          {
            "key": "insDensity",
            "label": [
              "Khối lượng riêng cách nhiệt",
              "Insulation density"
            ],
            "value": 48,
            "unit": "kg/m³",
            "min": 0,
            "max": 500
          },
          {
            "key": "extraMass",
            "label": [
              "Khối lượng bổ sung dọc tuyến",
              "Additional distributed mass"
            ],
            "value": 0,
            "unit": "kg/m",
            "min": 0,
            "max": 500
          },
          {
            "key": "jointMass",
            "label": [
              "Khối lượng bích/tăng cứng quy đổi",
              "Equivalent joint/stiffener mass"
            ],
            "value": 2,
            "unit": "kg/m",
            "min": 0,
            "max": 500
          },
          {
            "key": "pointMass",
            "label": [
              "Khối lượng tập trung bổ sung trên bộ treo",
              "Additional point mass on this trapeze"
            ],
            "value": 0,
            "unit": "kg",
            "min": 0,
            "max": 1000
          }
        ]
      },
      {
        "title": [
          "2. Bố trí bộ treo hai ty",
          "2. Two-rod trapeze arrangement"
        ],
        "fields": [
          {
            "key": "runLength",
            "label": [
              "Chiều dài tuyến thẳng",
              "Straight run length"
            ],
            "value": 12,
            "unit": "m",
            "min": 0.1,
            "max": 10000
          },
          {
            "key": "spanMode",
            "label": [
              "Chọn nhịp hai ty",
              "Rod span selection"
            ],
            "value": "auto",
            "options": [
              [
                "auto",
                [
                  "Tự động",
                  "Automatic"
                ]
              ],
              [
                "manual",
                [
                  "Tự chỉnh",
                  "Manual"
                ]
              ]
            ]
          },
          {
            "key": "spacing",
            "label": [
              "Khoảng cách dọc tuyến giữa các bộ treo",
              "Longitudinal hanger spacing"
            ],
            "value": 2.4,
            "unit": "m",
            "min": 0.1,
            "max": 6,
            "help": "spacing"
          },
          {
            "key": "span",
            "label": [
              "Nhịp thanh ngang giữa hai ty",
              "Bearer span between rods"
            ],
            "value": 0.8,
            "unit": "m",
            "min": 0.1,
            "max": 6,
            "help": "span"
          },
          {
            "key": "rod",
            "label": [
              "Ty ren hệ mét bước thô",
              "Metric coarse-thread rod"
            ],
            "value": "M10",
            "options": [
              [
                "M6",
                [
                  "M6",
                  "M6"
                ]
              ],
              [
                "M8",
                [
                  "M8",
                  "M8"
                ]
              ],
              [
                "M10",
                [
                  "M10",
                  "M10"
                ]
              ],
              [
                "M12",
                [
                  "M12",
                  "M12"
                ]
              ],
              [
                "M16",
                [
                  "M16",
                  "M16"
                ]
              ],
              [
                "M20",
                [
                  "M20",
                  "M20"
                ]
              ]
            ],
            "help": "components"
          },
          {
            "key": "rodLength",
            "label": [
              "Chiều dài mỗi ty",
              "Length of each rod"
            ],
            "value": 1,
            "unit": "m",
            "min": 0.05,
            "max": 10
          },
          {
            "key": "beamMass",
            "label": [
              "Khối lượng thanh ngang trên mét",
              "Bearer mass per metre"
            ],
            "value": 2,
            "unit": "kg/m",
            "min": 0,
            "max": 100
          },
          {
            "key": "clearance",
            "label": [
              "Khoảng hở mỗi bên ống sau cách nhiệt",
              "Clearance each side of insulated duct"
            ],
            "value": 75,
            "unit": "mm",
            "min": 0,
            "max": 500
          },
          {
            "key": "componentMode",
            "label": [
              "Chọn ty & thanh ngang",
              "Rod & bearer selection"
            ],
            "value": "auto",
            "options": [
              [
                "auto",
                [
                  "Tự động",
                  "Automatic"
                ]
              ],
              [
                "manual",
                [
                  "Tự chỉnh",
                  "Manual"
                ]
              ]
            ]
          }
        ]
      },
      {
        "title": [
          "3. Ty treo, thanh ngang & neo",
          "3. Rods, bearer & anchors"
        ],
        "fields": [
          {
            "key": "supportBasis",
            "label": [
              "Cơ sở tính giá treo",
              "Support calculation basis"
            ],
            "value": "preliminary",
            "options": [
              [
                "preliminary",
                [
                  "Tính sơ bộ · giả thiết vật liệu",
                  "Preliminary · assumed materials"
                ]
              ],
              [
                "manual",
                [
                  "Nhập dữ liệu đã được xác minh",
                  "Enter verified data"
                ]
              ]
            ]
          },
          {
            "key": "beamPreset",
            "label": [
              "Thanh ngang · chiều cao đặt đứng",
              "Bearer · depth vertical"
            ],
            "value": "rhs40",
            "options": [
              [
                "rhs40",
                [
                  "Hộp 40×40×2 · hình học lý tưởng",
                  "RHS 40×40×2 · ideal geometry"
                ]
              ],
              [
                "rhs60",
                [
                  "Hộp 60×40×2 · hình học lý tưởng",
                  "RHS 60×40×2 · ideal geometry"
                ]
              ],
              [
                "rhs80",
                [
                  "Hộp 80×40×2 · hình học lý tưởng",
                  "RHS 80×40×2 · ideal geometry"
                ]
              ]
            ]
          },
          {
            "key": "safety",
            "label": [
              "Hệ số chia giới hạn chảy (giả thiết sơ bộ)",
              "Yield-strength divisor (preliminary assumption)"
            ],
            "value": 3,
            "unit": "",
            "min": 1.5,
            "max": 5
          },
          {
            "key": "source",
            "label": [
              "Tài liệu đặc trưng tiết diện / giới hạn cho phép",
              "Section-property / allowable-value reference"
            ],
            "value": "",
            "text": true
          },
          {
            "key": "rodGrade",
            "label": [
              "Cấp bền / sản phẩm ty theo hồ sơ",
              "Rod property class / product reference"
            ],
            "value": "",
            "text": true
          },
          {
            "key": "beamProfile",
            "label": [
              "Tiết diện & hướng lắp thanh ngang",
              "Bearer section & installed orientation"
            ],
            "value": "",
            "text": true
          },
          {
            "key": "rodAllow",
            "label": [
              "Ứng suất kéo cho phép của ty (0: chưa có)",
              "Allowable rod tensile stress (0: unavailable)"
            ],
            "value": 0,
            "unit": "MPa",
            "min": 0,
            "max": 1000
          },
          {
            "key": "Z",
            "label": [
              "Môđun chống uốn đúng trục thanh ngang (0: chưa có)",
              "Bearer section modulus about bending axis (0: unavailable)"
            ],
            "value": 0,
            "unit": "cm³",
            "min": 0,
            "max": 1000
          },
          {
            "key": "I",
            "label": [
              "Mômen quán tính đúng trục thanh ngang (0: chưa có)",
              "Bearer second moment about bending axis (0: unavailable)"
            ],
            "value": 0,
            "unit": "cm⁴",
            "min": 0,
            "max": 10000
          },
          {
            "key": "E",
            "label": [
              "Môđun đàn hồi thanh ngang",
              "Bearer elastic modulus"
            ],
            "value": 200000,
            "unit": "MPa",
            "min": 10000,
            "max": 300000
          },
          {
            "key": "beamAllow",
            "label": [
              "Ứng suất uốn cho phép (0: chưa có)",
              "Allowable bending stress (0: unavailable)"
            ],
            "value": 0,
            "unit": "MPa",
            "min": 0,
            "max": 1000
          },
          {
            "key": "anchorSource",
            "label": [
              "Mã neo, nền neo & tài liệu sức chịu tải",
              "Anchor product, substrate & capacity reference"
            ],
            "value": "",
            "text": true
          },
          {
            "key": "anchorAllow",
            "label": [
              "Lực kéo cho phép mỗi neo (0: chưa có)",
              "Allowable tension per anchor (0: unavailable)"
            ],
            "value": 0,
            "unit": "kN",
            "min": 0,
            "max": 1000
          },
          {
            "key": "deflectionRatio",
            "label": [
              "Giới hạn võng L / hệ số",
              "Deflection limit L / divisor"
            ],
            "value": 250,
            "unit": "",
            "min": 100,
            "max": 1000
          }
        ]
      }
    ],
    "notes": [
      [
        "Tự chọn kiểm tra riêng thanh ngang theo uốn/võng và ty theo kéo, thử các mẫu từ nhỏ đến lớn. Mẫu lớn nhất vẫn phải được kiểm tra; không tự chọn neo. Sửa ty/thanh hoặc nhịp chuyển mục đó sang Tự chỉnh.",
        "Automatic selection checks bearer bending/deflection and rod tension independently, trying candidates from small to large. The largest candidate must still be checked; anchors are not selected. Editing a rod/bearer or span switches that setting to Manual."
      ],
      [
        "Tự chọn chỉ sàng lọc các mẫu M8–M20 và hộp 40×40×2, 60×40×2, 80×40×2 theo kéo ty, uốn và võng thanh; không tự chọn neo. Sửa ty/thanh hoặc nhịp chuyển mục đó sang Tự chỉnh. Chế độ nhập dữ liệu xác minh không tự thay thông số.",
        "Automatic selection screens M8–M20 rods and RHS 40×40×2, 60×40×2, 80×40×2 for rod tension, bearer bending and deflection; it does not select anchors. Editing a rod/bearer or span switches that setting to Manual. Verified-data mode never replaces section properties."
      ],
      [
        "Chế độ sơ bộ giả thiết ty cấp 4.6 (fy=240 MPa) và thép hộp S235 (fy=235 MPa). Hệ số chia mặc định 3 do công cụ chọn cho sàng lọc, không phải hệ số thiết kế theo một tiêu chuẩn áp dụng. I=(b h³−bi hi³)/12; Z=I/(h/2); tự trọng từ diện tích tiết diện ×7850 kg/m³. Góc vuông lý tưởng, chiều h đặt đứng; không dùng trực tiếp như đặc trưng catalogue của sản phẩm thực.",
        "Preliminary mode assumes class 4.6 rods (fy=240 MPa) and S235 RHS (fy=235 MPa). The default divisor 3 is a tool screening assumption, not a prescribed design factor under an applicable code. I=(b h³−bi hi³)/12; Z=I/(h/2); self-weight uses section area ×7850 kg/m³. Ideal sharp corners with h vertical; these are not actual product catalogue properties."
      ],
      [
        "Mô hình hai ty thẳng đứng, tải đối xứng, thanh ngang gối đơn. Tải ống trên chiều dài phân tải bằng khoảng cách bộ treo được quy thành lực tập trung giữa nhịp: bảo thủ so với tải đối xứng trải trên bề rộng ống. Tự trọng thanh ngang phân bố đều; tự trọng mỗi ty cộng vào lực kéo neo.",
        "Two vertical rods, symmetric loading and a simply supported bearer. Duct load over one hanger spacing is conservatively represented as a centre point load, compared with a symmetric load spread over the duct width. Bearer self-weight is uniform; each rod self-weight adds to anchor tension."
      ],
      [
        "Mmax = P L/4 + Wthanh L/8; võng giữa nhịp = P L³/(48 EI) + 5 Wthanh L³/(384 EI). Ứng suất ty = R/As; ứng suất thanh = M/Z. As dùng diện tích chịu kéo ren hệ mét bước thô, không dùng diện tích tròn danh nghĩa.",
        "Mmax = P L/4 + Wbearer L/8; centre deflection = P L³/(48 EI) + 5 Wbearer L³/(384 EI). Rod stress = R/As; bearer bending stress = M/Z. As is the metric coarse-thread tensile stress area, not the nominal circular area."
      ],
      [
        "Các giới hạn nhập phải là giá trị cho phép tương thích cùng cơ sở tải trọng sử dụng, đã xét hệ số an toàn phù hợp; không nhập tải phá hoại hoặc sức kháng thiết kế chưa quy đổi. Chưa có tài liệu/giới hạn thì chỉ hiển thị yêu cầu, không báo đạt.",
        "Entered limits must be compatible allowable values for the service-load basis, with suitable safety factors already included. Do not enter ultimate failure loads or unconverted design resistances. Without a reference/capacity value, requirements are shown without a passing verdict."
      ],
      [
        "Không chọn tiết diện thép góc/channel chỉ từ tên gọi: cần I, Z đúng trục và hướng lắp. Chưa kiểm tra xoắn, mất ổn định, lỗ đột, liên kết ty–thanh, ép cục bộ vỏ ống, yên đỡ ống tròn, nền neo, khoảng cách mép, nhóm neo hay kết cấu chịu lực.",
        "Angle/channel names alone do not establish capacity: I and Z must match the bending axis and installed orientation. Torsion, instability, perforations, rod–bearer connections, local shell bearing, round-duct saddles, anchor substrate, edge distances, anchor groups and supporting structure are not checked."
      ],
      [
        "Chỉ kiểm tra trọng lực tĩnh; không bao gồm tải động đất, gió, rung, tải người, ống đứng, giá console, ống chống cháy/khói hoặc yêu cầu khoảng cách treo theo tiêu chuẩn. Khoảng cách nhập là giả thiết cần kiểm tra, không phải khoảng cách tối đa được khuyến nghị.",
        "Static gravity loads only; seismic, wind, vibration, person loads, risers, cantilevers, fire/smoke-rated ducts and code-required hanger spacing are excluded. Entered spacing is a trial assumption, not a recommended maximum."
      ],
      [
        "Số bộ treo mẫu = ceil(L/bước treo)+1, bố trí cả hai đầu của từng tuyến độc lập. Giữ bước treo nhập làm chiều dài phân tải để kiểm tra bảo thủ. Tổng chiều dài thanh là tổng nhịp giữa hai ty, chưa cộng phần thừa đầu; tổng ty chưa cộng đoạn nối, đai ốc hay phần neo. Không tự gộp bộ treo tại đầu chung giữa các dòng.",
        "Example trapeze count = ceil(run length/spacing)+1, including both ends of each independent run. The entered spacing remains the conservative tributary length for checks. Bearer total is the rod-to-rod span only, excluding end extensions; rod totals exclude splices, nuts and embedment. Shared end supports across rows are not merged."
      ]
    ],
    "sources": [
      [
        "NFG — Metric coarse-thread areas & strength",
        "https://www.nfgab.com/technology-quality/technical-pages/tensile-strength/metric-coarse-threads"
      ],
      [
        "SCI — Beam formulae",
        "https://www.steelconstruction.info/images/6/65/Handbook_of_Structural_Steelwork_EE_55-13.pdf"
      ],
      [
        "Hilti — MI/MQ technical guide",
        "https://www.hilti.com/media-canonical/ASSET_DOC_LOC_1556188_APC_RAW"
      ],
      [
        "Hilti — Property class 4.6",
        "https://www.hilti.nl/engineering/question/wat-voor-staalkwaliteit-zijn-de-ankerstangen-van-hilti/ibouj6"
      ]
    ]
  }
};root.HVACDuctworkData=data;if(typeof module!=='undefined'&&module.exports)module.exports=data;})(typeof window!=='undefined'?window:globalThis);
