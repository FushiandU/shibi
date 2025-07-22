"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, DollarSign, PieChart } from "lucide-react"

export function ROICalculator() {
  const [currency, setCurrency] = useState("AED")
  const [propertyPrice, setPropertyPrice] = useState(6200000)
  const [rentalYield, setRentalYield] = useState([8])
  const [investmentPeriod, setInvestmentPeriod] = useState([10])
  const [downPayment, setDownPayment] = useState([20])
  const [mortgageRate, setMortgageRate] = useState([4])
  const [propertyGrowth, setPropertyGrowth] = useState([7])

  const calculateReturns = () => {
    const annualRental = propertyPrice * (rentalYield[0] / 100)
    const downPaymentAmount = propertyPrice * (downPayment[0] / 100)
    const loanAmount = propertyPrice - downPaymentAmount
    const monthlyMortgage =
      (loanAmount * (mortgageRate[0] / 100 / 12)) /
      (1 - Math.pow(1 + mortgageRate[0] / 100 / 12, -investmentPeriod[0] * 12))
    const annualMortgage = monthlyMortgage * 12
    const netCashFlow = annualRental - annualMortgage
    const futureValue = propertyPrice * Math.pow(1 + propertyGrowth[0] / 100, investmentPeriod[0])
    const capitalAppreciation = futureValue - propertyPrice
    const totalROI = ((netCashFlow * investmentPeriod[0] + capitalAppreciation) / downPaymentAmount) * 100

    return {
      annualRental: Math.round(annualRental),
      totalROI: Math.round(totalROI * 10) / 10,
      capitalAppreciation: Math.round(capitalAppreciation),
      netCashFlow: Math.round(netCashFlow),
      downPaymentAmount: Math.round(downPaymentAmount),
      futureValue: Math.round(futureValue),
    }
  }

  const results = calculateReturns()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calculator Inputs */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-navy-900">
            <Calculator className="h-6 w-6 mr-2 text-amber-600" />
            Investment Parameters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AED">AED</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="INR">INR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="propertyPrice">Property Price</Label>
              <Input
                id="propertyPrice"
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                placeholder="Enter property price"
              />
            </div>
          </div>

          <div>
            <Label>Rental Yield: {rentalYield[0]}%</Label>
            <Slider value={rentalYield} onValueChange={setRentalYield} max={15} min={3} step={0.5} className="mt-2" />
          </div>

          <div>
            <Label>Investment Period: {investmentPeriod[0]} years</Label>
            <Slider
              value={investmentPeriod}
              onValueChange={setInvestmentPeriod}
              max={30}
              min={1}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Down Payment: {downPayment[0]}%</Label>
            <Slider value={downPayment} onValueChange={setDownPayment} max={100} min={10} step={5} className="mt-2" />
          </div>

          <div>
            <Label>Mortgage Rate: {mortgageRate[0]}%</Label>
            <Slider
              value={mortgageRate}
              onValueChange={setMortgageRate}
              max={10}
              min={2}
              step={0.25}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Property Growth: {propertyGrowth[0]}%</Label>
            <Slider
              value={propertyGrowth}
              onValueChange={setPropertyGrowth}
              max={15}
              min={2}
              step={0.5}
              className="mt-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-navy-900">
            <TrendingUp className="h-6 w-6 mr-2 text-emerald-600" />
            Investment Returns
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-4 text-center">
                <DollarSign className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-700">{formatCurrency(results.annualRental)}</div>
                <div className="text-sm text-amber-600">Annual Returns</div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-4 text-center">
                <PieChart className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-emerald-700">{results.totalROI}%</div>
                <div className="text-sm text-emerald-600">Total ROI</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Capital Appreciation</span>
              <span className="font-semibold text-navy-900">{formatCurrency(results.capitalAppreciation)}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Net Cash Flow (Annual)</span>
              <span className="font-semibold text-navy-900">{formatCurrency(results.netCashFlow)}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Down Payment Required</span>
              <span className="font-semibold text-navy-900">{formatCurrency(results.downPaymentAmount)}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Future Property Value</span>
              <span className="font-semibold text-navy-900">{formatCurrency(results.futureValue)}</span>
            </div>
          </div>

          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Get Detailed Report via Email</Button>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              *Calculations are estimates based on provided parameters. Actual returns may vary based on market
              conditions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
