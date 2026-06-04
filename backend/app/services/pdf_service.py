from reportlab.lib.pagesizes import letter

from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle
)

from reportlab.lib import colors

from reportlab.lib.styles import (
    getSampleStyleSheet
)


class PDFService:

    @staticmethod
    def generate_pdf(report_data):

        file_path = "soil_report.pdf"

        doc = SimpleDocTemplate(
            file_path,
            pagesize=letter
        )

        styles = getSampleStyleSheet()

        elements = []

        # =====================================
        # TITLE
        # =====================================

        title = Paragraph(
            "Soil Intelligence Report",
            styles["Title"]
        )

        elements.append(title)

        elements.append(
            Spacer(1, 20)
        )

        # =====================================
        # FARMER DETAILS
        # =====================================

        farmer = report_data["farmer"]

        elements.append(
            Paragraph(
                f"<b>Farmer:</b> {farmer.get('name', 'N/A')}",
                styles["BodyText"]
            )
        )

        elements.append(
            Paragraph(
                f"<b>Mobile:</b> {farmer.get('mobile', 'N/A')}",
                styles["BodyText"]
            )
        )

        elements.append(
            Paragraph(
                f"<b>Crop:</b> {farmer.get('crop', 'N/A')}",
                styles["BodyText"]
            )
        )

        elements.append(
            Spacer(1, 20)
        )

        # =====================================
        # SOIL HEALTH
        # =====================================

        soil_health = report_data["soil_health"]

        elements.append(
            Paragraph(
                f"Soil Health Score: "
                f"{soil_health['score']}",
                styles["Heading2"]
            )
        )

        elements.append(
            Paragraph(
                f"Health Grade: "
                f"{soil_health['grade']}",
                styles["BodyText"]
            )
        )

        elements.append(
            Spacer(1, 20)
        )

        # =====================================
        # SUMMARY TABLE
        # =====================================

        summary = report_data["summary"]

        table_data = [

            [
                "Parameter",
                "Value"
            ],

            [
                "Organic Carbon",
                str(summary.get(
                    "Organic Carbon",
                    "N/A"
                ))
            ],

            [
                "Nitrogen",
                str(summary.get(
                    "Nitrogen",
                    "N/A"
                ))
            ],

            [
                "Phosphorus",
                str(summary.get(
                    "Phosphorus",
                    "N/A"
                ))
            ],

            [
                "Potassium",
                str(summary.get(
                    "Potassium",
                    "N/A"
                ))
            ],

            [
                "pH",
                str(summary.get(
                    "pH",
                    "N/A"
                ))
            ],

            [
                "EC",
                str(summary.get(
                    "EC",
                    "N/A"
                ))
            ],
        ]

        table = Table(table_data)

        table.setStyle(

            TableStyle([

                (
                    "BACKGROUND",
                    (0, 0),
                    (-1, 0),
                    colors.darkgreen
                ),

                (
                    "TEXTCOLOR",
                    (0, 0),
                    (-1, 0),
                    colors.white
                ),

                (
                    "GRID",
                    (0, 0),
                    (-1, -1),
                    1,
                    colors.black
                ),

                (
                    "FONTNAME",
                    (0, 0),
                    (-1, 0),
                    "Helvetica-Bold"
                ),

                (
                    "BOTTOMPADDING",
                    (0, 0),
                    (-1, 0),
                    10
                ),

                (
                    "BACKGROUND",
                    (0, 1),
                    (-1, -1),
                    colors.beige
                )
            ])
        )

        elements.append(table)

        elements.append(
            Spacer(1, 25)
        )

        # =====================================
        # CARBON SECTION
        # =====================================

        carbon = report_data["carbon"]

        elements.append(
            Paragraph(
                f"Carbon Score: "
                f"{carbon['carbon_score']}",
                styles["Heading2"]
            )
        )

        elements.append(
            Paragraph(
                f"Estimated CO₂ Saved: "
                f"{carbon['co2_saved']} kg",
                styles["BodyText"]
            )
        )

        elements.append(
            Spacer(1, 25)
        )

        # =====================================
        # GRID SECTION
        # =====================================

        elements.append(
            Paragraph(
                "Grid Analysis",
                styles["Heading2"]
            )
        )

        grid = report_data["grid"]

        for key, value in grid.items():

            elements.append(

                Paragraph(
                    f"{key} Grid:",
                    styles["BodyText"]
                )
            )

            grid_table = Table(value)

            grid_table.setStyle(

                TableStyle([

                    (
                        "GRID",
                        (0, 0),
                        (-1, -1),
                        1,
                        colors.black
                    ),

                    (
                        "BACKGROUND",
                        (0, 0),
                        (-1, -1),
                        colors.whitesmoke
                    ),
                ])
            )

            elements.append(grid_table)

            elements.append(
                Spacer(1, 15)
            )

        # =====================================
        # BUILD PDF
        # =====================================

        doc.build(elements)

        return file_path