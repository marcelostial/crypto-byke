/*
 * ***********************************************************************
 * Compass UOL CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass UOL.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass UOL and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass UOL
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass UOL.
 * ***********************************************************************
 */

package com.uol.cryptobike.core.models.impl;

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.uol.cryptobike.core.models.Footer;
import com.uol.cryptobike.core.models.FooterLinks;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Footer.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/footer")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FooterImpl
    implements Footer
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String linkedin;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String facebook;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String twitter;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String youtube;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String instagram;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String home;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bottomtextleft;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bottomtextright;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bottomrightlink;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<FooterLinks> footerlinks;
    @SlingObject
    private Resource resource;

    @Override
    public String getLinkedin() {
        return linkedin;
    }

    @Override
    public String getFacebook() {
        return facebook;
    }

    @Override
    public String getTwitter() {
        return twitter;
    }

    @Override
    public String getYoutube() {
        return youtube;
    }

    @Override
    public String getInstagram() {
        return instagram;
    }

    @Override
    public String getHome() {
        return home;
    }

    @Override
    public String getBottomtextleft() {
        return bottomtextleft;
    }

    @Override
    public String getBottomtextright() {
        return bottomtextright;
    }

    @Override
    public String getBottomrightlink() {
        return bottomrightlink;
    }

    @Override
    public List<FooterLinks> getFooterlinks() {
        return footerlinks != null ? Collections.unmodifiableList(footerlinks) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
