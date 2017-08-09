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

if( request.getParameter("analytics").toString().equals("updatecontact")){
	String data="{\"data\":" ;

	String SQL = "dbo.updatecontact @userid ="+request.getParameter("contactid")+
	",@parentuserid ="+request.getParameter("parentcontactid")+
	",@usertypeid ="+request.getParameter("usertypeid")+
	",@forename ="+request.getParameter("forename")+
	",@surname ="+request.getParameter("surname")+
	",@password ="+request.getParameter("password")+
	",@gcmid ="+request.getParameter("gcmid")+
	",@updatedby ="+request.getParameter("userid");
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

if( request.getParameter("analytics").toString().equals("changestatus")){
	String data="{\"data\":" ;

	String SQL = "investment_admin.dbo.archivecontact @contactid ="+request.getParameter("contactid");
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


if( request.getParameter("analytics").toString().equals("insertlist")){
	String data="{\"data\":" ;

	String SQL = "dbo.insertlist @parentlistid="+request.getParameter("parentlistid")+
	",@list="+request.getParameter("list")+
	",@createdby="+request.getParameter("userid");
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
if( request.getParameter("analytics").toString().equals("selectlist")){
	String data="{\"data\":" ;
	
	String SQL = "dbo.selectlist @parentlistid="+request.getParameter("parentlistid");
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
if( request.getParameter("analytics").toString().equals("selectcontact")){
	String data="{\"data\":" ;

	String SQL = "dbo.selectcontact @userid ="+request.getParameter("contactid")+
	",@parentuserid="+request.getParameter("parentcontactid")+
	",@usertypeid ="+request.getParameter("usertypeid")+
	",@forename ="+request.getParameter("forename")+
	",@surname ="+request.getParameter("surname");
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

if( request.getParameter("analytics").toString().equals("insertcontact")){
	String data="{\"data\":" ;

	String SQL = "dbo.insertcontact @parentuserid ="+request.getParameter("parentcontactid")+
	",@usertypeid ="+request.getParameter("usertypeid")+
	",@forename ="+request.getParameter("forename")+
	",@surname ="+request.getParameter("surname")+
	",@password ="+request.getParameter("password")+
	",@gcmid ="+request.getParameter("gcmid")+
	",@createdby ="+request.getParameter("userid");
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


if( request.getParameter("analytics").toString().equals("updatecontact")){
	String data="{\"data\":" ;

	String SQL = "dbo.updatecontact @userid ="+request.getParameter("contactid")+
	",@parentuserid ="+request.getParameter("parentcontactid")+
	",@usertypeid ="+request.getParameter("usertypeid")+
	",@forename ="+request.getParameter("forename")+
	",@surname ="+request.getParameter("surname")+
	",@password ="+request.getParameter("password")+
	",@gcmid ="+request.getParameter("gcmid")+
	",@updatedby ="+request.getParameter("userid");
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


if( request.getParameter("analytics").toString().equals("insertcontactemail")){
	String data="{\"data\":" ;

	String SQL = "dbo.insertcontactemail @userid="+request.getParameter("contactid")+
	",@emailtypeid="+request.getParameter("emailtypeid")+
	",@email="+request.getParameter("email")+
	",@createdby="+request.getParameter("userid");
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

if( request.getParameter("analytics").toString().equals("updatecontactemail")){
	String data="{\"data\":" ;

	String SQL = "dbo.updatecontactemail @user_emailid="+request.getParameter("contactemailid")+
	",@emailtypeid="+request.getParameter("emailtypeid")+
	",@email="+request.getParameter("email")+
	",@updatedby="+request.getParameter("userid");
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


if( request.getParameter("analytics").toString().equals("selectcontactemail")){
	String data="{\"data\":" ;

	String SQL = "dbo.selectcontactemail @contactemailid="+request.getParameter("contactemailid")+
	",@contactid="+request.getParameter("contactid")+
	",@email="+request.getParameter("email")+
	",@emailtypeid="+request.getParameter("emailtypeid");
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



if( request.getParameter("analytics").toString().equals("deletecontactemail")){
	String data="{\"data\":" ;

	String SQL = "dbo.deletecontactemail @useremailid="+request.getParameter("contactemailid");
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
