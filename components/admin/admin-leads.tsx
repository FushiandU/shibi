"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Users,
  Mail,
  Phone,
  Calendar,
  Search,
  Download,
  Eye,
  Trash2,
  MessageSquare,
  Star,
  TrendingUp,
  Save,
} from "lucide-react"

interface Lead {
  id: string
  fullName: string
  email: string
  phone: string
  interest: string
  language: string
  source: string
  status: "new" | "contacted" | "qualified" | "converted" | "lost"
  priority: "low" | "medium" | "high"
  notes: string
  assignedTo: string
  createdAt: string
  lastContact: string
  nextFollowUp: string
  value: number
  tags: string[]
}

export function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/admin/leads")
      if (response.ok) {
        const data = await response.json()
        setLeads(data)
      }
    } catch (error) {
      console.error("Failed to fetch leads:", error)
    }
  }

  const updateLead = async (leadId: string, updates: Partial<Lead>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        const updatedLead = await response.json()
        setLeads(leads.map((l) => (l.id === leadId ? updatedLead : l)))
        setMessage("Lead updated successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to update lead")
      }
    } catch (error) {
      setMessage("Error updating lead")
    } finally {
      setIsLoading(false)
    }
  }

  const deleteLead = async (leadId: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setLeads(leads.filter((l) => l.id !== leadId))
        setMessage("Lead deleted successfully!")
        setSelectedLead(null)
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to delete lead")
      }
    } catch (error) {
      setMessage("Error deleting lead")
    } finally {
      setIsLoading(false)
    }
  }

  const exportLeads = async () => {
    try {
      const response = await fetch("/api/admin/leads/export")
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error("Failed to export leads:", error)
    }
  }

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.fullName || "").toLowerCase().includes((searchTerm || "").toLowerCase()) ||
      (lead.email || "").toLowerCase().includes((searchTerm || "").toLowerCase()) ||
      (lead.phone || "").includes(searchTerm || "")
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter
    const matchesPriority = priorityFilter === "all" || lead.priority === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    qualified: leads.filter((l) => l.status === "qualified").length,
    converted: leads.filter((l) => l.status === "converted").length,
    totalValue: leads.reduce((sum, l) => sum + (l.value || 0), 0),
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Lead Management</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={exportLeads}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Leads</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.qualified}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Converted</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.converted}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">AED {stats.totalValue.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
                <SelectItem value="lost">Lost</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card>
        <CardHeader>
          <CardTitle>Leads ({filteredLeads.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{lead.fullName}</h3>
                      <Badge
                        variant={
                          lead.status === "new"
                            ? "default"
                            : lead.status === "contacted"
                              ? "secondary"
                              : lead.status === "qualified"
                                ? "outline"
                                : lead.status === "converted"
                                  ? "default"
                                  : "destructive"
                        }
                      >
                        {lead.status}
                      </Badge>
                      <Badge
                        variant={
                          lead.priority === "high"
                            ? "destructive"
                            : lead.priority === "medium"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {lead.priority} priority
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {lead.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        {lead.phone}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                      <div>Interest: {lead.interest}</div>
                    </div>

                    {lead.notes && (
                      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <MessageSquare className="h-4 w-4 inline mr-1" />
                        {lead.notes.substring(0, 100)}...
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedLead(lead)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Lead Details</DialogTitle>
                        </DialogHeader>
                        <LeadDetails
                          lead={selectedLead}
                          onUpdate={(updates) => updateLead(selectedLead!.id, updates)}
                          isLoading={isLoading}
                        />
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" onClick={() => deleteLead(lead.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLeads.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              {searchTerm || statusFilter !== "all" || priorityFilter !== "all"
                ? "No leads match your filters"
                : "No leads yet"}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface LeadDetailsProps {
  lead: Lead | null
  onUpdate: (updates: Partial<Lead>) => void
  isLoading: boolean
}

function LeadDetails({ lead, onUpdate, isLoading }: LeadDetailsProps) {
  const [formData, setFormData] = useState<Partial<Lead>>(lead || {})

  useEffect(() => {
    if (lead) {
      setFormData(lead)
    }
  }, [lead])

  if (!lead) return null

  const handleChange = (field: keyof Lead, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onUpdate(formData)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status || "new"} onValueChange={(value) => handleChange("status", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="priority">Priority</Label>
          <Select value={formData.priority || "medium"} onValueChange={(value) => handleChange("priority", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="assigned-to">Assigned To</Label>
          <Input
            id="assigned-to"
            value={formData.assignedTo || ""}
            onChange={(e) => handleChange("assignedTo", e.target.value)}
            placeholder="Assign to team member"
          />
        </div>
        <div>
          <Label htmlFor="value">Estimated Value (AED)</Label>
          <Input
            id="value"
            type="number"
            value={formData.value || ""}
            onChange={(e) => handleChange("value", Number.parseInt(e.target.value) || 0)}
            placeholder="0"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="next-followup">Next Follow-up</Label>
        <Input
          id="next-followup"
          type="datetime-local"
          value={formData.nextFollowUp || ""}
          onChange={(e) => handleChange("nextFollowUp", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={formData.notes || ""}
          onChange={(e) => handleChange("notes", e.target.value)}
          placeholder="Add notes about this lead..."
          rows={4}
        />
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Lead Information</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Name:</strong> {lead.fullName}
          </div>
          <div>
            <strong>Email:</strong> {lead.email}
          </div>
          <div>
            <strong>Phone:</strong> {lead.phone}
          </div>
          <div>
            <strong>Interest:</strong> {lead.interest}
          </div>
          <div>
            <strong>Language:</strong> {lead.language}
          </div>
          <div>
            <strong>Source:</strong> {lead.source}
          </div>
          <div>
            <strong>Created:</strong> {new Date(lead.createdAt).toLocaleString()}
          </div>
          <div>
            <strong>Last Contact:</strong> {lead.lastContact ? new Date(lead.lastContact).toLocaleString() : "Never"}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button onClick={handleSave} disabled={isLoading}>
          <Save className="h-4 w-4 mr-2" />
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}
