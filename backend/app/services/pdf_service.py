from reportlab.lib.pagesizes import letter

from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib.styles import getSampleStyleSheet


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

        title = Paragraph(
            "Soil Intelligence Report",
            styles["Title"]
        )

        elements.append(title)

        elements.append(
            Spacer(1, 20)
        )

        farmer = report_data["farmer"]

        elements.append(
            Paragraph(
                f"Farmer: {farmer['name']}",
                styles["BodyText"]
            )
        )

        elements.append(
            Paragraph(
                f"Village: {farmer['village']}",
                styles["BodyText"]
            )
        )

        elements.append(
            Paragraph(
                f"Crop: {farmer['crop']}",
                styles["BodyText"]
            )
        )

        elements.append(
            Spacer(1, 20)
        )

        elements.append(
            Paragraph(
                f"Soil Health Score: {report_data['soil_health_score']}",
                styles["Heading2"]
            )
        )

        elements.append(
            Paragraph(
                f"Health Status: {report_data['health_status']}",
                styles["BodyText"]
            )
        )

        elements.append(
            Spacer(1, 20)
        )

        for key, value in report_data["parameters"].items():

            text = (
                f"{key} : "
                f"{value['value']} | "
                f"{value['status']} | "
                f"{value['recommendation']}"
            )

            elements.append(
                Paragraph(
                    text,
                    styles["BodyText"]
                )
            )

        doc.build(elements)

        return file_path