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

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.uol.cryptobike.core.models.Sectiondownload;
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
    Sectiondownload.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/sectiondownload")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class SectiondownloadImpl
    implements Sectiondownload
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firsttextlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondtextlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String thirdtextlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fourthtextlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String urlbuttonapple;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String urlbuttongoogle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelapple;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelgoogle;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("firsttextlabel")
    public String getFirsttextlabel() {
        return firsttextlabel;
    }

    @Override
    @JsonProperty("secondtextlabel")
    public String getSecondtextlabel() {
        return secondtextlabel;
    }

    @Override
    @JsonProperty("thirdtextlabel")
    public String getThirdtextlabel() {
        return thirdtextlabel;
    }

    @Override
    @JsonProperty("fourthtextlabel")
    public String getFourthtextlabel() {
        return fourthtextlabel;
    }

    @Override
    @JsonProperty("urlbuttonapple")
    public String getUrlbuttonapple() {
        return urlbuttonapple;
    }

    @Override
    @JsonProperty("urlbuttongoogle")
    public String getUrlbuttongoogle() {
        return urlbuttongoogle;
    }

    @Override
    @JsonProperty("labelapple")
    public String getLabelapple() {
        return labelapple;
    }

    @Override
    @JsonProperty("labelgoogle")
    public String getLabelgoogle() {
        return labelgoogle;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
