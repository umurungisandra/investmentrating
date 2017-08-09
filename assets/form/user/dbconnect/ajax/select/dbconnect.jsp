<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.util.*" import="java.sql.*" import="java.sql.DriverManager" %>

<%


Connection con;
Statement stmt;
ResultSet rs;
ResultSetMetaData rsmd;

try{
Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
con = DriverManager.getConnection("jdbc:sqlserver://yauro.co.za;user=allied;password=w384cc355;"); 
stmt = con.createStatement();


//select response


if( request.getParameter("analytics").toString().equals("selectcontact")){
	String data="{\"data\":" ;

	String SQL = "analytics_admin.dbo.selectcontact "+
	"@contactid ="+request.getParameter("contactid");
	rs=stmt.executeQuery(SQL);
	rsmd= rs.getMetaData();
	int x = 0;
	while (rs.next()){
		if(x>0) data=data+",{";
		if(x==0) data=data+"[{";
		for(int i=1; i<= rsmd.getColumnCount(); i++){
			if(i==1) data = data+"\""+ rsmd.getColumnName(i)+"\":\""+rs.getString(rsmd.getColumnName(i)) + "\"";
			if(i>1) data = data+",\""+ rsmd.getColumnName(i)+"\":\""+rs.getString(rsmd.getColumnName(i)) + "\"";
		}
		data=data+"}";
		x++;
	}
	data=data+"]}";
	out.println(data);
}
if( request.getParameter("analytics").toString().equals("selectcountry")){
	String data="{\"data\":" ;

	String SQL = "analytics_admin.dbo.selectcountry @country="+request.getParameter("country");
	rs=stmt.executeQuery(SQL);
	rsmd= rs.getMetaData();
	int x = 0;
	while (rs.next()){
		if(x>0) data=data+",{";
		if(x==0) data=data+"[{";
		for(int i=1; i<= rsmd.getColumnCount(); i++){
			if(i==1) data = data+"\""+ rsmd.getColumnName(i)+"\":\""+rs.getString(rsmd.getColumnName(i)) + "\"";
			if(i>1) data = data+",\""+ rsmd.getColumnName(i)+"\":\""+rs.getString(rsmd.getColumnName(i)) + "\"";
		}
		data=data+"}";
		x++;
	}
	data=data+"]}";
	out.println(data);
}

} catch (Exception e) {
out.println(e);
}
%>

