function print(content, color = "") {
  if (color === "") {
    color = "black";
    if (content === "success") {
      color = "green";
    }

    if (content === "failure") {
      color = "red";
    }
  }
  const p = document.createElement("P");
  p.innerHTML = `<span style="color: ${color}">${content}</span>`;
  document.body.appendChild(p);
}

const treeData = `[
    {
        "label": "Isilon Cluster",
        "expanded": true,
        "data": {
            "sections": [
                [
                    "Isilon Cluster"
                ]
            ]
        },
        "children": [
            {
                "label": "groupnet0",
                "expanded": true,
                "data": {
                    "id": 1,
                    "sections": [
                        [
                            "groupnet0"
                        ],
                        [
                            "10.255.250.30,10.255.251.30"
                        ],
                        [
                            ""
                        ],
                        [
                            "DNS Cache = true",
                            "Server Side Search = true"
                        ]
                    ]
                },
                "children": [
                    {
                        "label": "pri-599",
                        "expanded": true,
                        "data": {
                            "id": 2,
                            "sections": [
                                [
                                    "pri-599"
                                ],
                                [
                                    "10.205.52.1"
                                ],
                                [
                                    "GW Priority = 1",
                                    "GW  = 10.205.52.126",
                                    "MTU = 1500",
                                    "vlan = false"
                                ]
                            ]
                        },
                        "children": [
                            {
                                "label": "mgmt",
                                "expanded": true,
                                "data": {
                                    "id": 3,
                                    "sections": [
                                        [
                                            "mgmt",
                                            "Management IP pool"
                                        ],
                                        [
                                            "n3pewpnas01-mgmt.storage.secureserver.net",
                                            ""
                                        ],
                                        [
                                            "lacp, round-robin, static"
                                        ],
                                        [
                                            "10.205.52.4-10.205.52.20"
                                        ]
                                    ]
                                },
                                "children": []
                            },
                            {
                                "label": "nfs",
                                "expanded": true,
                                "data": {
                                    "id": 4,
                                    "sections": [
                                        [
                                            "nfs",
                                            null
                                        ],
                                        [
                                            "n3pewpnas01-nfs.storage.secureserver.net",
                                            ""
                                        ],
                                        [
                                            "lacp, round-robin, dynamic"
                                        ],
                                        [
                                            "10.205.52.21-10.205.52.120"
                                        ]
                                    ]
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
]`;

console.log(JSON.parse(treeData))