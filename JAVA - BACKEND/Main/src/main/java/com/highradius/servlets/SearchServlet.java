package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;
import com.google.gson.Gson;

/**
 * Servlet implementation class SearchServlet
 */
@WebServlet("/SearchServlet")
public class SearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		// Retrieve the customerOrderID of the invoice to delete
		int customerOrderID = Integer.parseInt(request.getParameter("customerOrderID"));

		InvoiceDaoImpl invoiceDaoImpl = new InvoiceDaoImpl();

		List<Invoice> invoice = invoiceDaoImpl.searchInvoice(String.valueOf(customerOrderID));
		// Delete the invoice from the database
		invoiceDaoImpl.searchInvoice(String.valueOf(customerOrderID));

		// Set the response type
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		
		// Convert the invoice object to JSON format
		String json = new Gson().toJson(invoice);

		PrintWriter out = response.getWriter();
		out.print(json);
		out.flush();


		// Send the response
		
		doGet(request, response);
	}

}
