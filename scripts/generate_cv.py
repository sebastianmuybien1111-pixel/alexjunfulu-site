from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Alex-Junfu-Lu-CV.pdf"
PUBLIC = ROOT / "public" / "cv" / "Alex-Junfu-Lu-CV.pdf"

NAVY = colors.HexColor("#18212B")
OXBLOOD = colors.HexColor("#8F2738")
MUTED = colors.HexColor("#59616A")
LINE = colors.HexColor("#D7D0C5")

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("ArialCV", FONT_DIR / "Arial.ttf"))
pdfmetrics.registerFont(TTFont("ArialCV-Bold", FONT_DIR / "Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("ArialCV-Italic", FONT_DIR / "Arial Italic.ttf"))
pdfmetrics.registerFont(TTFont("TimesCV", FONT_DIR / "Times New Roman.ttf"))
pdfmetrics.registerFont(TTFont("TimesCV-Bold", FONT_DIR / "Times New Roman Bold.ttf"))
pdfmetrics.registerFont(TTFont("TimesCV-Italic", FONT_DIR / "Times New Roman Italic.ttf"))

styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name", fontName="TimesCV-Bold", fontSize=27, leading=28, textColor=NAVY,
    spaceAfter=3,
)
subtitle_style = ParagraphStyle(
    "Subtitle", fontName="ArialCV", fontSize=9.2, leading=13, textColor=MUTED,
)
contact_style = ParagraphStyle(
    "Contact", fontName="ArialCV", fontSize=8, leading=12, textColor=MUTED,
    alignment=TA_RIGHT,
)
section_style = ParagraphStyle(
    "Section", fontName="ArialCV-Bold", fontSize=8.2, leading=10, textColor=OXBLOOD,
    spaceBefore=9, spaceAfter=5, uppercase=True,
)
entry_style = ParagraphStyle(
    "Entry", fontName="ArialCV", fontSize=8.55, leading=12.1, textColor=NAVY,
)
entry_bold_style = ParagraphStyle(
    "EntryBold", parent=entry_style, fontName="ArialCV-Bold", fontSize=9.2, leading=12.3,
)
meta_style = ParagraphStyle(
    "Meta", parent=entry_style, fontSize=8, leading=11.3, textColor=MUTED,
)
date_style = ParagraphStyle(
    "Date", parent=entry_style, fontName="ArialCV-Bold", fontSize=8, leading=11,
    alignment=TA_RIGHT,
)


def section(title: str):
    return [
        Spacer(1, 1),
        Table(
            [[Paragraph(title.upper(), section_style), ""]],
            colWidths=[55 * mm, 1],
            style=TableStyle([
                ("LINEBELOW", (0, 0), (-1, -1), 0.65, LINE),
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ]),
        ),
        Spacer(1, 3),
    ]


def entry(title: str, date: str, meta: str = "", body: str = ""):
    rows = [[Paragraph(title, entry_bold_style), Paragraph(date, date_style)]]
    if meta:
        rows.append([Paragraph(meta, meta_style), ""])
    if body:
        rows.append([Paragraph(body, entry_style), ""])
    table = Table(rows, colWidths=[145 * mm, 28 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("SPAN", (0, 1), (1, 1)) if meta else ("SPAN", (0, 0), (0, 0)),
        ("SPAN", (0, 2), (1, 2)) if body and meta else (("SPAN", (0, 1), (1, 1)) if body else ("SPAN", (0, 0), (0, 0))),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
    ]))
    return KeepTogether([table, Spacer(1, 4)])


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, 13 * mm, A4[0] - doc.rightMargin, 13 * mm)
    canvas.setFont("ArialCV", 7.2)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 8.5 * mm, "Alex Junfu Lu | Academic CV")
    canvas.drawRightString(A4[0] - doc.rightMargin, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf(path: Path):
    path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(path), pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=16 * mm, bottomMargin=18 * mm,
        title="Alex Junfu Lu - Academic CV",
        author="Alex Junfu Lu",
        subject="Academic curriculum vitae",
    )
    story = []
    header = Table(
        [[
            Paragraph("Alex Junfu Lu", name_style),
            Paragraph("Suzhou, China<br/>junfu.lu24@student.xjtlu.edu.cn<br/><link href='https://github.com/sebastianmuybien1111-pixel' color='#59616A'>GitHub</link>", contact_style),
        ], [
            Paragraph("International Relations Undergraduate<br/>Xi'an Jiaotong-Liverpool University", subtitle_style), "",
        ]],
        colWidths=[120 * mm, 53 * mm],
    )
    header.setStyle(TableStyle([
        ("SPAN", (0, 1), (0, 1)),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.extend([header, Spacer(1, 7)])

    story += section("Research Interests")
    story.append(Paragraph(
        "Foreign Policy Decision-Making · International Conflict · Domestic Politics and State Behaviour · International Relations Theory · International Institutions",
        entry_style,
    ))

    story += section("Education")
    story.append(entry("Xi'an Jiaotong-Liverpool University", "Expected May 2028", "B.A. in International Relations · GPA: 3.8/4.0", "Suzhou, China"))
    story.append(entry("National Research University Higher School of Economics (HSE University)", "Summer 2024", "Summer Programme in Political Science and Digital Politics · Score: 9/10", "Saint Petersburg, Russia"))

    story += section("Research Experience")
    story.append(entry("Summer Undergraduate Research Fellow (SURF), XJTLU", "2026", "Supervisor: Dr. Mohsen Al Attar", "<i>Algorithmic Jurisdictions: Lex Informatica and Legal Heterodoxy in the Chinese Platform Economy</i>"))
    story.append(entry("Research Lead, XJTLU Research-Led Learning Symposium", "2025", "First Prize", "<i>A Global Climate Framework for a Shared Future</i>"))
    story.append(entry("Undergraduate Research Assistant / SURF, XJTLU", "2025", "Supervisor: Dr. Lina Gong", "<i>Accountability and Politics: Measuring ICC Arrest Warrants' Practical Effects</i>"))

    story += section("Publication")
    story.append(entry(
        "Fang, Y., & Lu, J. \"Complex Mechanisms in Climate Refugee Management: A Case Study from Bangladesh.\"",
        "2025",
        "Proceedings of the 1st International Conference on Innovative Education and Social Development (IESD 2025), pp. 564-570 · SciTePress",
        "DOI: <link href='https://doi.org/10.5220/0014003400004912' color='#8F2738'>10.5220/0014003400004912</link>",
    ))

    story += section("Selected Research Papers & Working Papers")
    story.append(entry("<i>When Are Regional Organisations More Effective than Global Institutions? Explaining Governance Effectiveness in Complex Transnational Challenges</i>", "2026", "Selected Research Paper"))
    story.append(entry("<i>When Security Overrides Efficiency: The Return of Geopolitics in the Global Economy</i>", "2026", "Selected Research Paper"))
    story.append(entry("<i>Unequal Skies, Shared Destiny: Bridging the Political and Financial Rift in Global Climate Governance</i>", "2026", "Working Paper"))

    story.append(PageBreak())
    story += section("Awards & Honours")
    story.append(entry("Best Paper Award", "2026", "XJTLU HSS Interdisciplinary Student Conference"))
    story.append(entry("First Prize", "2025", "XJTLU Research-Led Learning Symposium"))
    story.append(entry("Second Place", "2024", "Student Research Mini-Projects on Internationalization of Education, XJTLU"))
    story.append(entry("First-Class Scholarship", "2024", "Xi'an Jiaotong-Liverpool University"))

    story += section("Academic Leadership")
    story.append(entry("Executive Secretary-General", "2026", "XJTLU Model United Nations Association"))
    story.append(entry("Academic Director", "2025", "XJTLU Model United Nations Association"))
    story.append(entry("Dais Head", "2026", "Zhejiang University Pan-Yangtze River Delta Region MUN · China Daily MUN · Beijing Foreign Studies University MUN"))

    story += section("University Service")
    story.append(entry("Undergraduate Student Representative", "Current", "Academic Board"))
    story.append(entry("Class President", "Current", "Xi'an Jiaotong-Liverpool University"))
    story.append(entry("International Relations Student Ambassador", "Current", "Xi'an Jiaotong-Liverpool University"))

    story += section("Additional Experience")
    story.append(entry("Government Finance Office Intern", "Jul-Aug 2024", "Dongguan Finance Bureau, Dalang Branch"))

    story += section("Methods, Languages & Skills")
    story.append(entry("Research Methods", "", body="Qualitative case studies · Comparative analysis · Literature review · Document analysis · Basic quantitative analysis"))
    story.append(entry("Technical", "", body="Microsoft Excel · Zotero · LaTeX · Microsoft Office"))
    story.append(entry("Languages", "", body="Chinese - Native · English - Advanced · Spanish - Elementary"))

    story += section("Standardized Tests")
    story.append(entry("GRE General Test: 339", "June 2026", "Verbal 170 · Quantitative 169 · Analytical Writing 5.0"))
    story.append(entry("IELTS Academic: Overall 7.0", "July 2023"))

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    build_pdf(OUTPUT)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(OUTPUT, PUBLIC)
    print(OUTPUT)
    print(PUBLIC)
