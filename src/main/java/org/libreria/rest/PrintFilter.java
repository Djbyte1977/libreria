package org.libreria.rest;

import java.io.IOException;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.ext.Provider;


@Provider
public class PrintFilter implements ContainerResponseFilter, ContainerRequestFilter {

    @Override
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext)
            throws IOException {


        System.out.println("Response body: " + responseContext.getEntity());
    }

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        
        java.util.Scanner s = new java.util.Scanner(requestContext.getEntityStream()).useDelimiter("\\A");            
        System.out.println("request body: " + s.hasNext() ? s.next() : "");
    }


}
