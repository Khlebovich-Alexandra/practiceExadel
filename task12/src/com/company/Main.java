package com.company;
import java.sql.*;

public class Main {

    public static void main(String[] args) {
        Connection cn = null;
        try
        {
//            Class.forName("com.mysql.jdbc.Driver").newInstance();
            //подключить mysql-connector-java-5.1.15-bin.jar в Libraries
            String url = "jdbc:mysql://localhost/photo_portal";
            cn = DriverManager.getConnection(url,"root","1111");
            Statement st = cn.createStatement();
            System.out.println("001");
            String sql = "SELECT * FROM photo_post ORDER BY CREATION_DATE ASC;";
            ResultSet rs = st.executeQuery(sql);
            rs.beforeFirst();
            while(rs.next())
            {
                for(int col = 0; col < 5; col++)
                {
                    System.out.print(rs.getString(col+1)+" ");
                }
                System.out.println();
            }
            System.out.println();
            System.out.println("002");
            sql = "SELECT * FROM photo_post WHERE user_id = 2;;";
            rs = st.executeQuery(sql);
            rs.beforeFirst();
            while(rs.next())
            {
                for(int col = 0; col < 5; col++)
                {
                    System.out.print(rs.getString(col+1)+" ");
                }
                System.out.println();
            }

            System.out.println();
            System.out.println("003");
            sql = "SELECT * FROM photo_post WHERE user_id=2 AND creation_date LIKE '2012-03-04';";
            rs = st.executeQuery(sql);
            rs.beforeFirst();
            while(rs.next())
            {
                for(int col = 0; col < 5; col++)
                {
                    System.out.print(rs.getString(col+1)+" ");
                }
                System.out.println();
            }
            System.out.println();
            System.out.println("004");
            sql = "SELECT * FROM photo_post WHERE description LIKE '%hello%';\n";
            rs = st.executeQuery(sql);
            rs.beforeFirst();
            while(rs.next())
            {
                for(int col = 0; col < 5; col++)
                {
                    System.out.print(rs.getString(col+1)+" ");
                }
                System.out.println();
            }
            System.out.println();
            System.out.println("005");
            sql = "SELECT users.name FROM users, photo_post WHERE users.user_id = photo_post.user_id\n" +
                    "GROUP BY users.user_id\n" +
                    "HAVING COUNT(photo_post.user_id) >= 3;";
            rs = st.executeQuery(sql);
            rs.beforeFirst();
            while(rs.next())
            {
                for(int col = 0; col < 1; col++)
                {
                    System.out.print(rs.getString(col+1)+" ");
                }
                System.out.println();
            }
            System.out.println();
            System.out.println("006");
            sql = "SELECT name FROM users;";
            rs = st.executeQuery(sql);
            rs.beforeFirst();
            while(rs.next())
            {
                for(int col = 0; col < 1; col++)
                {
                    System.out.print(rs.getString(col+1)+" ");
                }
                System.out.println();
            }
            System.out.println();
            System.out.println("007");
            sql = "SELECT DISTINCT name FROM users;";
            rs = st.executeQuery(sql);
            rs.beforeFirst();
            while(rs.next())
            {
                for(int col = 0; col < 1; col++)
                {
                    System.out.print(rs.getString(col+1)+" ");
                }
                System.out.println();
            }
            st.close();
        }
        catch(SQLException e)
        {
            System.out.println("No connect");
        }
        finally
        {
            try
            {
                if (cn != null)
                    cn.close();
            }
            catch(SQLException e)
            {
                System.out.println(e);
            }
        }    }
}
