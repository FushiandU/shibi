import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, Eye } from "lucide-react"

export function MarketReports() {
  const reports = [
    {
      title: "Dubai Real Estate Market Report Q3 2024",
      description: "Comprehensive analysis of market performance, trends, and investment opportunities in Q3 2024.",
      date: "October 2024",
      pages: "45 pages",
      type: "Quarterly Report",
      featured: true,
      downloadCount: "2,847",
    },
    {
      title: "Golden Visa Impact Analysis 2024",
      description: "In-depth study of how Golden Visa policies have influenced Dubai's real estate market dynamics.",
      date: "September 2024",
      pages: "32 pages",
      type: "Special Report",
      featured: false,
      downloadCount: "1,923",
    },
    {
      title: "Off-Plan Investment Guide 2024",
      description: "Complete guide to off-plan property investments, risks, opportunities, and best practices.",
      date: "August 2024",
      pages: "28 pages",
      type: "Investment Guide",
      featured: false,
      downloadCount: "3,156",
    },
    {
      title: "Dubai Marina Market Deep Dive",
      description: "Detailed analysis of Dubai Marina's property market, rental yields, and future prospects.",
      date: "July 2024",
      pages: "22 pages",
      type: "Area Analysis",
      featured: false,
      downloadCount: "1,654",
    },
    {
      title: "Luxury Real Estate Trends 2024",
      description: "Exclusive insights into Dubai's luxury property market, buyer preferences, and price movements.",
      date: "June 2024",
      pages: "38 pages",
      type: "Luxury Report",
      featured: false,
      downloadCount: "2,234",
    },
    {
      title: "Foreign Investment Patterns Analysis",
      description: "Analysis of international investment flows into Dubai real estate and emerging trends.",
      date: "May 2024",
      pages: "35 pages",
      type: "Investment Analysis",
      featured: false,
      downloadCount: "1,789",
    },
  ]

  const upcomingReports = [
    {
      title: "Dubai Real Estate Market Report Q4 2024",
      expectedDate: "January 2025",
      description: "Year-end comprehensive market analysis and 2025 outlook",
    },
    {
      title: "Expo 2030 Impact Assessment",
      expectedDate: "February 2025",
      description: "Analysis of Expo 2030's expected impact on real estate values",
    },
    {
      title: "Sustainable Real Estate in Dubai",
      expectedDate: "March 2025",
      description: "Green building trends and sustainable investment opportunities",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Market Reports
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
            Comprehensive Market Analysis
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download detailed reports and analysis to make informed investment decisions
          </p>
        </div>

        {/* Featured Report */}
        {reports
          .filter((report) => report.featured)
          .map((report, index) => (
            <Card
              key={index}
              className="border-none shadow-xl mb-12 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <Badge className="bg-amber-600 text-white mb-4">Featured Report</Badge>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3">{report.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{report.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {report.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {report.pages}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {report.downloadCount} downloads
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download Free
                    </Button>
                    <Button size="lg" variant="outline">
                      Preview Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

        {/* Other Reports */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reports
            .filter((report) => !report.featured)
            .map((report, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700">
                <CardHeader>
                  <Badge variant="outline" className="w-fit text-xs">
                    {report.type}
                  </Badge>
                  <CardTitle className="text-lg text-navy-900 dark:text-white leading-tight">{report.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{report.description}</p>

                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{report.date}</span>
                    <span>{report.pages}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-600">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{report.downloadCount} downloads</span>
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Upcoming Reports */}
        <div>
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8 text-center">Upcoming Reports</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingReports.map((report, index) => (
              <Card key={index} className="border-2 border-dashed border-gray-300 dark:border-gray-600 bg-transparent">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-navy-900 dark:text-white mb-2">{report.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{report.description}</p>
                  <Badge variant="outline" className="text-amber-600 border-amber-600">
                    Expected: {report.expectedDate}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
